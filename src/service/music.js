const musicDAO = require('../dao/music');

class MusicService {

  async getAllMusicTitles() {
    const titles = await musicDAO.getAllMusicTitles();
    return titles;
  }
  async getMusicPrograms(id) {
    const programs = await musicDAO.getMusicPrograms(id);
    return programs;

  }
}
module.exports = new MusicService();