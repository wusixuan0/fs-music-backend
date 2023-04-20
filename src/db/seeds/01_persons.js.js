/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('person').del()
  await knex('person').insert([
    {id: 1, first_name: 'Yuna', last_name: 'Kim'},
    {id: 2, first_name: 'Mao', last_name: 'Asada'},
    {id: 3, first_name: 'Aliona', last_name: 'Kostornaia'}
  ]);
};
