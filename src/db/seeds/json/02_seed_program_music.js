exports.seed = async function(knex) {
  // Deletes ALL existing entries

  
  await knex('musics').insert([
    {
      id: 1,
      title: 'Send in the Clowns',
      additional_info: '{"From": "A Little Night Music"}'
    },
  ]);

  await knex('programs').insert([
    {
      id: 1,
      program_title: 'Send in the Clowns',
      program_type: 'Short programs',
      skater_id: 1,
    },
  ]);

  await knex('program_music').insert([
    {
      program_id: 1,
      music_id: 1,
    },
  ]);

  await knex('program_skater').insert([
    {
      program_id: 1,
      skater_id: 1,
    },
  ]);

  await knex('program_choreographer').insert([
    {
      program_id: 1,
      choreographer_id: 1,
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
      season_id: 11,
    },
  ]);
};