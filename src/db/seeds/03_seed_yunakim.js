const data = require('./json/yunakim.json');

exports.seed = async function(knex) {
  await knex('program_seasons').del()
  await knex('artist_music').del()
  await knex('program_choreographer').del()
  await knex('program_skater').del()
  await knex('program_music').del()
  await knex('musics').del()
  await knex('programs').del()
  await knex('seasons').del()
  
  await knex('choreographers').del();
  await knex('artists').del();
  await knex('skaters').del();
  await knex('persons').del();
  await knex('seasons').insert([
    {'id': 1, 'season_year': '2023–2024'},
    {'id': 2, 'season_year': '2022–2023'},
    {'id': 3, 'season_year': '2021–2022'},
    {'id': 4, 'season_year': '2020–2021'},
    {'id': 5, 'season_year': '2019–2020'},
    {'id': 6, 'season_year': '2018–2019'},
    {'id': 7, 'season_year': '2017–2018'},
    {'id': 8, 'season_year': '2016–2017'},
    {'id': 9, 'season_year': '2015–2016'},
    {'id': 10, 'season_year': '2014–2015'},
    {'id': 11, 'season_year': '2013–2014'},
    {'id': 12, 'season_year': '2012–2013'},
    {'id': 13, 'season_year': '2011–2012'},
    {'id': 14, 'season_year': '2010–2011'},
    {'id': 15, 'season_year': '2009–2010'},
    {'id': 16, 'season_year': '2008–2009'},
    {'id': 17, 'season_year': '2007–2008'},
    {'id': 18, 'season_year': '2006–2007'},
    {'id': 19, 'season_year': '2005–2006'},
    {'id': 20, 'season_year': '2004–2005'},
    {'id': 21, 'season_year': '2003–2004'},
    {'id': 22, 'season_year': '2002–2003'},
    {'id': 23, 'season_year': '2001–2002'}
  ]);
  const person = {
    first_name: 'Yuna', 
    family_name: 'Kim',
    country: 'South Korea',
    native_name: '김연아',
    link: 'https://en.wikipedia.org/wiki/Yuna_Kim',
  };

  const [{ id: person_id }] = await knex('persons').insert(person).returning('id');

  const skater = {
    person_id: person_id,
    discipline: 'women',
    program_link: 'https://en.wikipedia.org/wiki/Yuna_Kim#Programs',
  }

  const [{ id: skater_id }] = await knex('skaters').insert(skater).returning('id');
  console.log(`Created ${ person.first_name} ${ person.family_name} with person id ${person_id } and skater id ${skater_id }` ); 


  for (let i = 0; i < data.length; i++) {
    const program = data[i];
    const program_record = {
      program_title: program.program_title,
      program_type: program.program_type,
      skater_id: skater_id
    }
    const [{ id: program_id }] = await knex('programs').insert(program_record).returning('id');

    
    const musics = program['musics'][0];
    
    const music = {
      title: musics.title,
      additional_info: musics.additional_info
    }
    const [{ id: music_id }] = await knex('musics').insert(music).returning('id');

    // TODO 1: parse artist's name properly such as Pablo de Sarasate
    // TODO 2: add multiple artist such as {"performed_by": "Jos\u00e9 Feliciano, Ewan McGregor, Jacek Koman"}
    // same for choregrapher
    // TODO 3: abstract into helper function 
    if (musics.artists) {
      for (const role in musics.artists) {

        const [first_name, family_name] = musics.artists[role].split(" ");
        const [{ id: artist_person_id }] = await knex('persons').insert({ first_name: first_name, family_name: family_name}).returning('id');

        const [{ id: artist_id }] = await knex('artists').insert({ person_id: artist_person_id}).returning('id');
        await knex('artist_music').insert([
          {
            artist_id: artist_id,
            music_id: music_id,
            role: role
          },
        ]);
      }
    }

    await knex('program_music').insert([
      {
        program_id: program_id,
        music_id: music_id,
      },
    ]);
    await knex('program_skater').insert([
      {
        program_id: program_id, 
        skater_id: skater_id
      },
    ]);


    if (data[i].choreo) {
      const [first_name, family_name] = data[i].choreo.split(" ");
      const result = await knex('choreographers')
        .join('persons', 'persons.id', '=', 'choreographers.person_id')
        .where({
          'persons.first_name': first_name,
          'persons.family_name': family_name
        })
        .select('choreographers.id')
        .first();

      let choreographer_id = result ? result.id : null;
      if (!choreographer_id) {
        const [{ id: choreo_person_id }] = await knex('persons').insert({ first_name: first_name, family_name: family_name}).returning('id');

        const [{ id: choreo_id }] = await knex('choreographers').insert({ person_id: choreo_person_id}).returning('id');
        choreographer_id = choreo_id
      } 


      await knex('program_choreographer').insert([
        {
          program_id: program_id,
          choreographer_id: choreographer_id,
          
        },
      ]);
    }



    const seasons = data[i].season;

    for (let k = 0; k < seasons.length; k++) {
      const [{ id: season_id }] = await knex('seasons')
        .select('id')
        .where('season_year', seasons[k])

      await knex('program_seasons').insert([
        {
          program_id: program_id,
          season_id: season_id,
        },
      ]);  
    }

  }
}

  



