exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('program_seasons').del()
  await knex('artist_music').del()
  await knex('program_choreographer').del()
  await knex('program_skater').del()
  await knex('program_music').del()
  await knex('musics').del()
  await knex('programs').del()
  await knex('seasons').del()
  await knex('program_types').del()
  
  await knex('choreographers').del();
  await knex('artists').del();
  await knex('skaters').del();
  await knex('persons').del();
  await knex('countries').del();
  await knex('disciplines').del();
  
  await knex('program_types').insert([
    {
      id: 1,
      type: 'Short Program',
    },
    {
      id: 2,
      type: 'Free Skating',
    },
    {
      id: 3,
      type: 'Exhibition',
    },
    {
      id: 4,
      type: 'Free Dance',
    },
    {
      id: 5,
      type: 'Original Dance',
    },
    {
      id: 6,
      type: 'Compulsory Dance',
    },
  ]);
  await knex('countries').insert([
    {
      ioc_code: 'KOR',
      name: 'South Korea',
    },
    {
      ioc_code: 'JPN',
      name: 'Japan',
    },
    {
      ioc_code: 'USA',
      name: 'USA',
    },
    {
      ioc_code: 'CAN',
      name: 'Canada',
    },
    {
      ioc_code: 'RUS',
      name: 'Russia',
    },
    {
      ioc_code: 'CHN',
      name: 'China',
    },
  ]);

  await knex('disciplines').insert([
    {
      id: 1,
      type: 'Women',
    },    
    {
      id: 2,
      type: 'Men',
    },    
    {
      id: 3,
      type: 'Pairs',
    },    
    {
      id: 4,
      type: 'Ice Dance',
    },
  ]);

  await knex('persons').insert([
    {
      id: 1, 
      name: 'Yuna Kim', 
      country_code: 'KOR',
    },
    {
      id: 2, 
      name: 'Mao Asada', 
      country_code: 'JPN',
    },
    {
      id: 3, 
      name: 'Michelle Kwan', 
      country_code: 'USA',
    },
    {
      id: 4, 
      name: 'Meryl Davis / Charlie White', 
      country_code: 'USA',
    },
    {
      id: 5,
      name: 'Tatiana Totmianina / Maxim Marinin', 
      country_code: 'RUS',
    },
    {
      id: 6,
      name: 'David Wilson', 
      country_code: 'CAN',
    },
    {
      id: 7,
      name: 'Tatiana Tarasova',
      country_code: 'RUS',
    },
    {
      id: 8,
      name: 'Nikolai Rimsky-Korsakov', 
      country_code: 'RUS',
    },
  ]);

  await knex('skaters').insert([
    {
      id: 1, 
      person_id: 1,
      discipline_id: 1,
    },
    {
      id: 2,
      person_id: 2,
      discipline_id: 1,
    },
    {
      id: 3, 
      person_id: 3,
      discipline_id: 2,
    },
    {
      id: 4, 
      person_id: 4,
      discipline_id: 4,
    },
    {
      id: 5,
      person_id: 5,
      discipline_id: 3,
    },
  ]);

  await knex('choreographers').insert([
    {
      id: 1,
      person_id: 6,
    },
    {
      id: 2,
      person_id: 7,
    },
  ]);

  await knex('artists').insert([
    {
      id: 1,
      person_id: 8,
    },
  ]);
  await knex('musics').insert([
    {
      id: 1,
      title: 'Scheherazade',
    },
  ]);

  await knex('programs').insert([
    {
      id: 1,
      program_type_id: 2,
      skater_id: 1,
    },
    {
      id: 2,
      program_type_id: 1,
      skater_id: 2,
    },
    {
      id: 3,
      program_type_id: 2,
      skater_id: 3,
    },
    {
      id: 4,
      program_type_id: 4,
      skater_id: 4,
    },
    {
      id: 5,
      program_type_id: 2,
      skater_id: 5,
    },
  ]);

  await knex('program_music').insert([
    {
      program_id: 1,
      music_id: 1,
    },
    {
      program_id: 2,
      music_id: 1,
    },
    {
      program_id: 3,
      music_id: 1,
    },
    {
      program_id: 4,
      music_id: 1,
    },
    {
      program_id: 5,
      music_id: 1,
    },
  ]);

  await knex('program_skater').insert([
    {
      program_id: 1,
      skater_id: 1,
    },
    {
      program_id: 2,
      skater_id: 2,
    },
    {
      program_id: 3,
      skater_id: 3,
    },
    {
      program_id: 4,
      skater_id: 4,
    },
    {
      program_id: 5,
      skater_id: 5,
    },
  ]);

  await knex('program_choreographer').insert([
    {
      program_id: 1,
      choreographer_id: 1,
    },
    {
      program_id: 2,
      choreographer_id: 2,
    },
  ]);

  await knex('artist_music').insert([
    {
      artist_id: 1,
      music_id: 1,
    },
  ]);

  await knex('seasons').insert([
    {'id': 1, 'season_year': '2023-2024'},
    {'id': 2, 'season_year': '2022-2023'},
    {'id': 3, 'season_year': '2021-2022'},
    {'id': 4, 'season_year': '2020-2021'},
    {'id': 5, 'season_year': '2019-2020'},
    {'id': 6, 'season_year': '2018-2019'},
    {'id': 7, 'season_year': '2017-2018'},
    {'id': 8, 'season_year': '2016-2017'},
    {'id': 9, 'season_year': '2015-2016'},
    {'id': 10, 'season_year': '2014-2015'},
    {'id': 11, 'season_year': '2013-2014'},
    {'id': 12, 'season_year': '2012-2013'},
    {'id': 13, 'season_year': '2011-2012'},
    {'id': 14, 'season_year': '2010-2011'},
    {'id': 15, 'season_year': '2009-2010'},
    {'id': 16, 'season_year': '2008-2009'},
    {'id': 17, 'season_year': '2007-2008'},
    {'id': 18, 'season_year': '2006-2007'},
    {'id': 19, 'season_year': '2005-2006'},
    {'id': 20, 'season_year': '2004-2005'},
    {'id': 21, 'season_year': '2003-2004'},
    {'id': 22, 'season_year': '2002-2003'},
    {'id': 23, 'season_year': '2001-2002'}
 ]);
  
  await knex('program_seasons').insert([
    {
      program_id: 1,
      season_id: 16,
    },
    {
      program_id: 2,
      season_id: 13,
    },
    {
      program_id: 3,
      season_id: 23,
    },
    {
      program_id: 4,
      season_id: 11,
    },
    {
      program_id: 5,
      season_id: 20,
    },
  ]);
};
