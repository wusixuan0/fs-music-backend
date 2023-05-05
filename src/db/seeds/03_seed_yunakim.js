const data = require('./json/yunakim.json');
function parseName(name) {
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const familyName = nameParts.slice(1).join(" ");
  return { firstName, familyName };
}
async function getChoreoId(knex, firstName, familyName) {
  const result = await knex('choreographers')
    .join('persons', 'persons.id', '=', 'choreographers.person_id')
    .where({
      'persons.first_name': firstName,
      'persons.family_name': familyName
    })
    .select('choreographers.id')
    .first();
  return result ? result.id : null;
}

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
 
  // seed seasons table from 1989 to 2024
  const seasons = [];
  for (let i = 0; i < 35; i++) {
    const year = 2023 - i;
    const seasonYear = `${year}–${year + 1}`;
    const season = { season_year: seasonYear };
    seasons.push(season);
  }
  await knex('seasons').insert(seasons);

  // manually seed person and skater row
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

  for (const program of data) {

    const program_record = {
      program_title: program.program_title,
      program_type: program.program_type,
      skater_id: skater_id
    }
    const [{ id: program_id }] = await knex('programs').insert(program_record).returning('id');
    console.log(`Created ${ program.program_title } with id ${program_id } and skater id ${skater_id }` ); 
    
    await knex('program_skater').insert([
      {
        program_id: program_id, 
        skater_id: skater_id
      },
    ]);

    // TODO 1: add iteration to musics
    const musics = program['musics'][0];
    
    // TODO 2: search if music exist, if not then create music
    // TODO 4
    const music = {
      title: musics.title,
      additional_info: musics.additional_info
    }
    const [{ id: music_id }] = await knex('musics').insert(music).returning('id');
    console.log(`Created ${ musics.title } with music id ${music_id }` ); 
    
    await knex('program_music').insert([
      {
        program_id: program_id,
        music_id: music_id,
      },
    ]);

    // TODO 3: add search artist, if not then create
    // TODO 4
    if (musics.artists) {
      for (const role in musics.artists) {
        name_list = musics.artists[role].split(", ");
        for (const name of name_list) {
          const { firstName, familyName } = parseName(name)

          const [{ id: artist_person_id }] = await knex('persons').insert({ first_name: firstName, family_name: familyName}).returning('id');

          const [{ id: artist_id }] = await knex('artists').insert({ person_id: artist_person_id}).returning('id');
          console.log(`Created ${role} ${ firstName } ${ familyName } with person id ${artist_person_id }, artist id ${artist_id }` ); 
          await knex('artist_music').insert([
            {
              artist_id: artist_id,
              music_id: music_id,
              role: role
            },
          ]);
        }
      }
    }

    if (program.choreo) {
      name_list = program.choreo.split(", ");
      for (const choreo of name_list) {
        const [first_name, family_name] = choreo.split(" ");
    // TODO 4 CHECK if person table exit, dont duplicate, refactor logic of getChoreoId function
        
        // const result = await knex('choreographers')
        //   .join('persons', 'persons.id', '=', 'choreographers.person_id')
        //   .where({
        //     'persons.first_name': first_name,
        //     'persons.family_name': family_name
        //   })
        //   .select('choreographers.id')
        //   .first();
        // let choreographer_id = result ? result.id : null;
        let choreographer_id = await getChoreoId(knex, first_name, family_name);


        if (!choreographer_id) {
          const [{ id: choreo_person_id }] = await knex('persons').insert({ first_name: first_name, family_name: family_name}).returning('id');

          const [{ id: choreo_id }] = await knex('choreographers').insert({ person_id: choreo_person_id}).returning('id');
          console.log(`Created ${ first_name } ${ family_name } with person id ${choreo_person_id } and choreo id ${choreo_id }` ); 
          choreographer_id = choreo_id
        }

        await knex('program_choreographer').insert([
          {
            program_id: program_id,
            choreographer_id: choreographer_id,            
          },
        ]);
      }
    }



    for (const season of program.season) {
      const [{ id: season_id }] = await knex('seasons')
        .select('id')
        .where('season_year', season)

      await knex('program_seasons').insert([
        {
          program_id: program_id,
          season_id: season_id,
        },
      ]);  
    }

  }
}

  



