const db = require('../db/db');

class MusicDAO {
  async getAllMusicTitles() {
    const [titles] = await db('musics')
      .select('id','title');
    return titles;
  }

  async getMusicPrograms(musicId) {
    const music_title_result = await db('musics')
      .select('title')
      .where('musics.id', musicId)
      .first();

    if (!music_title_result) {
      return {};
    }

    const programs = await db('program_music')
      .join('programs', 'program_music.program_id', 'programs.id')
      .join('skaters', 'programs.skater_id', 'skaters.id')
      .join('persons', 'skaters.person_id', 'persons.id')
      .join('disciplines', 'skaters.discipline_id', 'disciplines.id')
      .join('program_seasons', 'programs.id', 'program_seasons.program_id')
      .join('program_types', 'programs.program_type_id', 'program_types.id')
      .join('seasons', 'program_seasons.season_id', 'seasons.id')
      .join('countries', 'skaters.country_code', 'countries.ioc_code')
      .leftJoin('program_choreographer', 'programs.id', 'program_choreographer.program_id')
      .leftJoin('choreographers', 'program_choreographer.choreographer_id', 'choreographers.id')
      .leftJoin('persons AS choreographers_persons', 'choreographers.person_id', 'choreographers_persons.id')
      .select(
        'persons.name AS skater_name',
        'countries.name AS skater_country',
        'disciplines.type AS discipline_type',
        'program_types.type AS program_type',
        'seasons.season_year AS season',
        'choreographers_persons.name AS choreographer_name'
      )
      .where('program_music.music_id', musicId)
    
    const result = {
      "music_title": music_title_result.title,
      "programs":programs,
    }

    return result;
  }
}

module.exports = new MusicDAO();
