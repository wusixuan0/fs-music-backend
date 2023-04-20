const personDAO = require('../dao/person');

class PersonService {
  async createPerson(personDto) {
    try {
      const { firstName, lastName } = personDto;
      return personDAO.createPerson(firstName, lastName);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve person');
    }
  }

  async getPerson(id) {
    try {
      const person = await personDAO.getPerson(id);
      return person;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve person');
    }
  }
  async getPeople(id) {
    try {
      const people = await personDAO.getPeople();
      return people;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve person');
    }
  }
}
module.exports = new PersonService();