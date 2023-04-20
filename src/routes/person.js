const express = require('express');
const personController = require('../controller/person');

const router = express.Router();

router.get('/', personController.getPeople);
router.get('/:id', personController.getPerson);
router.post('/', personController.createPerson);

module.exports = router;
