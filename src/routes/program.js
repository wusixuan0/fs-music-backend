const express = require('express');
const programController = require('../controller/program');

const router = express.Router();

router.get('/', programController.getAllProgramsAlphabetically);
// router.get('/:id', personController.getPerson);
// router.post('/', personController.createPerson);

module.exports = router;
