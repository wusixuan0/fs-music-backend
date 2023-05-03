const programDAO = require('../dao/program');

class ProgramService {
  // async createProgram(programDto) {
  //   try {
  //     const { firstName, lastName } = personDto;
  //     return personDAO.createPerson(firstName, lastName);
  //   } catch (err) {
  //     console.error(err);
  //     throw new Error('Failed to retrieve person');
  //   }
  // }

  // async getPerson(id) {
  //   try {
  //     const person = await personDAO.getPerson(id);
  //     return person;
  //   } catch (err) {
  //     console.error(err);
  //     throw new Error('Failed to retrieve person');
  //   }
  // }
  async getAllProgramsAlphabetically(id) {
    try {
      const programs = await programDAO.getAllProgramsAlphabetically();
      return programs;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve programs');
    }
  }
}
module.exports = new ProgramService();