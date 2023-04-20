const db = require('../db/db');

class PersonDAO {
  async createPerson(firstName, lastName) {
    const [id] = await db('person')
      .insert({
        first_name: firstName,
        last_name: lastName,
      })
      .returning('id');
    return id;
  }

  async getPerson(id) {
    const [person] = await db('person')
      .select('*')
      .where({ id });

    return person;
  }

  async getPeople() {
    const people = await db('person')
      .select('*')
    return people;
  }
}

module.exports = new PersonDAO();
