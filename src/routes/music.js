const express = require('express');
const musicController = require('../controller/music');

const router = express.Router();

router.get('/', musicController.getAllMusicTitles);
router.get('/:id', musicController.getMusicPrograms);

module.exports = router;
