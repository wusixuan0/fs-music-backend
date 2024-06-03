const db = require('../db/db');

class MusicDAO {
  async getAllMusicTitles() {
    const [titles] = await db('music')
      .select('title')
    return titles;
  }

  async getMusicPrograms(music_id) {
    const programs = await db('music')
      .select('*')
      .where({ music_id });
    return programs;
  }
}

module.exports = new MusicDAO();
