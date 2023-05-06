import requests
from bs4 import BeautifulSoup
import re
import json

url = "https://en.wikipedia.org/wiki/Yuna_Kim#Programs"
soup = BeautifulSoup(requests.get(url).content, 'html.parser')

program_section_yuna = soup.find('span', id='Programs')
program_table_yuna = program_section_yuna.find_next('table', class_='wikitable')

def remove_extra_quote(s):
    if s.startswith('"') and s.endswith('"'):
        return s[1:-1]
    else:
        return s

def find_program_info(text):
    performed_by_pattern = r'Performed by (.+)'
    composer_pattern = r'Composed by\s+(.+?)\n'  # Extracts the composer after the string "Composed by"
    choreo_pattern = r'[Cc]horeo\. by\s+(.+?)\n'
    source_pattern = r'From (.+)'
    perform_pattern = r'Performed by (.+)'

    # Extract source
    source_match = re.search(source_pattern, text)
    source = source_match.group(1) if source_match else None


    performed_by_match = re.search(performed_by_pattern, text)
    performed_by = performed_by_match.group(1) if performed_by_match else None

    composer_match = re.search(composer_pattern, text)
    composer = composer_match.group(1) if composer_match else None

    choreo_match = re.search(choreo_pattern, text)
    choreo = choreo_match.group(1) if choreo_match else None
    return source, performed_by, composer, choreo
  

season = None
datas = []
titles = {}
for row in program_table_yuna.find_all(['tr', 'th'])[1:]:
  name, source, performed_by, composer, choreo = None, None, None, None, None
  cells = row.find_all(['td', 'th'])

  for i, cell in enumerate(cells):
    text = cell.text

    lines = text.split("\n")
    lines = [line.strip() for line in lines if line.strip()]

    if not lines: continue
    if lines[0] == '—' or lines[0] == "Did not compete this season":
      continue
    if (i == 0):
      # if it's season years
      pattern = r'^[0-9]{4}(–[0-9]{2}|\u2013[0-9]{4})'
      match = re.search(pattern, lines[0])
      if match:
        season = match.group().replace('–', '–20')
        continue
      else:
         program_type = 'Exhibition' # due to Yuna Kim program table's format

    if (i == 1):
      program_type = "Short program"
    elif i == 2:
      program_type = "Free skating"
    else:
      program_type = "Exhibition"
    # handle the program music info
    name = remove_extra_quote(lines[0])
    if name in titles:
      
      index = titles[name]
      if program_type == datas[index]["program_type"]:
        datas[index]["season"].append(season)
        continue
      elif name == "El Tango de Roxanne":
        copy = datas[titles[name]]
        data = {
          "season": seasons,
          "program_title": name,
          "musics": copy["musics"],      
          "choreo": copy["choreo"],
          "program_type": program_type
        }

        datas.append(data)
        continue
        
    source, performed_by, composer, choreo = find_program_info(text)   
    artists = {}
    if composer:
      artists["composer"] = composer
    if performed_by:
      artists["performed_by"] = performed_by
    
    seasons = []
    seasons.append(season)

    musics = [{"title": name, "artists": artists}]
    additional_info = {}
    if source:
      musics[0]["additional_info"] = {"from": source} 
    

    data = {
      "season": seasons,
      "program_title": name,
      "musics": musics,      
      "choreo": choreo,
      "program_type": program_type
    }
    datas.append(data)
    
    titles[name] = len(datas) - 1

with open("./seeds/json/yunakim.json", "w") as f:
    json.dump(datas, f)