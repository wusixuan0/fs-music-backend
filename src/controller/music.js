const musicService = require('../service/music');

class MusicController {
	async getAllMusicTitles(req, res) {
    const titles = await musicService.getAllMusicTitles();
    res.status(200).json(titles);
	}
	async getMusicPrograms(req, res) {
		const id = req.params.id;
		const programs = await musicService.getMusicPrograms(id);
    res.status(200).json(programs);
	}
}

module.exports = new MusicController();
