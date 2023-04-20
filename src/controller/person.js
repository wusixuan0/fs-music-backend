const personService = require('../service/person');

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
	async getPerson(req, res) {
	  try {
	    const id = req.params.id;
	    const person = await personService.getPerson(id);
	    res.status(200).json(person);
	  } catch (err) {
	    console.error(err);
	    res.status(500).json({ error: 'Failed to retrieve person' });
	  }
	}
	async getPeople(req, res) {
	  try {
	    const people = await personService.getPeople();
	    res.status(200).json(people);
	  } catch (err) {
	    console.error(err);
	    res.status(500).json({ error: 'Failed to retrieve person' });
	  }
	}
}

module.exports = new PersonController();
