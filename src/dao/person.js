const db = require('../db/db');

class PersonDAO {
  async createPerson(firstName, lastName) {
    const [id] = await db('persons')
      .insert({
        first_name: firstName,
        last_name: lastName,
      })
      .returning('id');
    return id;
  }

  async getPerson(id) {
    const [person] = await db('persons')
      .select('*')
      .where({ id });

    return person;
  }

  async getPeople() {
    const people = await db('persons')
      .select('*')
    return people;
  }
}

module.exports = new PersonDAO();
