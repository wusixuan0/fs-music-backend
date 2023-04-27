exports.up = function(knex) {
  return knex.schema
    .createTable('skaters', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('person.id').notNullable();
    })
    .createTable('choreographers', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('person.id').notNullable();
    })
    .createTable('artists', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('person.id').notNullable();
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('artists')
    .dropTable('choreographers')
    .dropTable('skaters')
};
