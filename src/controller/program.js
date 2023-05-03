const programService = require('../service/program');

class ProgramController {
  // async createPerson(req, res) {
  //   try {
  //     const id = await personService.createPerson(req.body);
  //     res.status(201).json(id);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
// 	async getPerson(req, res) {
// 	  try {
// 	    const id = req.params.id;
// 	    const person = await personService.getPerson(id);
// 	    res.status(200).json(person);
// 	  } catch (err) {
// 	    console.error(err);
// 	    res.status(500).json({ error: 'Failed to retrieve person' });
// 	  }
// 	}
	async getAllProgramsAlphabetically(req, res) {
	  try {
	    const programs = await programService.getAllProgramsAlphabetically();
	    res.status(200).json(programs);
	  } catch (err) {
	    console.error(err);
	    res.status(500).json({ error: 'Failed to retrieve programs' });
	  }
	}
}

module.exports = new ProgramController();
