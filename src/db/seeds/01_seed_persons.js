exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('choreographers').del();
  await knex('artists').del();
  await knex('skaters').del();
  await knex('persons').del();

  await knex('persons').insert([
    {
      id: 1, 
      first_name: 'Yuna', 
      family_name: 'Kim',
      country: 'South Korea',
      native_name: '김연아',
      link: 'https://en.wikipedia.org/wiki/Yuna_Kim',
    },
    {
      id: 2, 
      first_name: 'Mao', 
      family_name: 'Asada',
      country: 'Japan',
      native_name: '浅田真央',
      link: 'https://en.wikipedia.org/wiki/Mao_Asada',
    },
    {
      id: 3, 
      first_name: 'Yuzuru', 
      family_name: 'Hanyu',
      country: 'Japan',
      native_name: '羽生結弦',
      link: 'https://en.wikipedia.org/wiki/Yuzuru_Hanyu',
    },
    {
      id: 4, 
      first_name: 'Wenjing', 
      family_name: 'Sui',
      country: 'China',
      native_name: '隋文静',
      link: 'https://en.wikipedia.org/wiki/Sui_Wenjing',
    },
    {
      id: 5,
      first_name: 'Cong', 
      family_name: 'Han',
      country: 'China',
      native_name: '韩聪',
      link: 'https://en.wikipedia.org/wiki/Han_Cong',
    },
    {
      id: 6,
      first_name: 'Tessa', 
      family_name: 'Virtue',
      country: 'Canada',
      link: 'https://en.wikipedia.org/wiki/Tessa_Virtue',
    },
    {
      id: 7,
      first_name: 'Scott', 
      family_name: 'Moir',
      country: 'Canada',
      link: 'https://en.wikipedia.org/wiki/Scott_Moir',
    },
    {
      id: 8,
      first_name: 'David', 
      family_name: 'Wilson',
      country: 'Canada',
      link: 'https://en.wikipedia.org/wiki/David_Wilson_(figure_skating)',
    },
    {
      id: 9,
      first_name: 'Lori', 
      family_name: 'Nichol',
      country: 'Canada',
      link: 'https://en.wikipedia.org/wiki/Lori_Nichol',
    },
    {
      id: 10,
      first_name: 'Stephen', 
      family_name: 'Sondheim',
      country: 'USA',
      link: 'https://en.wikipedia.org/wiki/Stephen_Sondheim',
    },
  ]);

  await knex('skaters').insert([
    {
      id: 1, 
      person_id: 1,
      discipline: 'women',
      program_link: 'https://en.wikipedia.org/wiki/Yuna_Kim#Programs',
    },
    {
      id: 2,
      person_id: 2,
      discipline: 'women',
      program_link: 'https://en.wikipedia.org/wiki/Mao_Asada#Programs',
    },
    {
      id: 3, 
      person_id: 3,
      discipline: 'men',
      program_link: 'https://en.wikipedia.org/wiki/List_of_programs_and_publications_of_Yuzuru_Hanyu',
    },
    {
      id: 4, 
      person_id: 4,
      discipline: 'pairs',
      program_link: 'https://en.wikipedia.org/wiki/Sui_Wenjing#Programs',
    },
    {
      id: 5,
      person_id: 5,
      discipline: 'pairs',
      program_link: 'https://en.wikipedia.org/wiki/Han_Cong#Programs',
    },
    {
      id: 6,
      person_id: 6,
      discipline: 'ice_dance',
      program_link: 'https://en.wikipedia.org/wiki/Tessa_Virtue#Programs',
    },
    {
      id: 7,
      person_id: 7,
      discipline: 'ice_dance',
      program_link: 'https://en.wikipedia.org/wiki/Scott_Moir#Programs',
    },
  ]);

  await knex('choreographers').insert([
    {
      id: 1,
      person_id: 8,
    },
    {
      id: 2,
      person_id: 9,
    },
  ]);

  await knex('artists').insert([
    {
      id: 1,
      person_id: 10,
    },
  ]);
};
