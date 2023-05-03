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

  const person = {
    first_name: 'Yuna', 
    family_name: 'Kim',
    country: 'South Korea',
    native_name: '김연아',
    link: 'https://en.wikipedia.org/wiki/Yuna_Kim',
  };

  const personId = await knex('persons').insert(person).returning('id');

  const skater = {
    person_id: personId[0].id,
    discipline: 'women',
    program_link: 'https://en.wikipedia.org/wiki/Yuna_Kim#Programs',
  }

  const skaterId = await knex('skaters').insert(skater).returning('id');
  console.log(`Created ${ person.first_name} ${ person.family_name} with person id ${personId[0].id } and skater id ${skaterId[0].id }` ); 
};

// for (let i = 0; i < data.length; i++) {
//   const program = data[i];
//   const program_record = {
//     program_title: program.program_title,
//     program_type: program.program_type,
//     skater_id: skater_id
//   }
//   const program_id = await knex('program').insert(program_record).returning('id');
  
//   const music = data[i]['musics'];





  



