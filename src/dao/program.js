const db = require('../db/db');

class ProgramDAO {
  // async createPerson(firstName, lastName) {
  //   const [id] = await db('persons')
  //     .insert({
  //       first_name: firstName,
  //       last_name: lastName,
  //     })
  //     .returning('id');
  //   return id;
  // }

  // async getProgram(id) {
  //   const [program] = await db('programs')
  //     .select('*')
  //     .where({ id });

  //   return program;
  // }

  async getAllProgramsAlphabetically() {
    const programs = await db('programs')
      .select('*')
      .orderBy('program_title', 'asc');
    return programs;
  }
}

module.exports = new ProgramDAO();
