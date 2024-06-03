exports.up = function(knex) {
  return knex.schema
    .createTable('persons', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('country');
      table.timestamps(true, true);
    })
    .createTable('skaters', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('persons.id').notNullable();
      table.string('discipline').notNullable();
    })
    .createTable('choreographers', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('persons.id').notNullable();
    })
    .createTable('artists', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('persons.id').notNullable();
    })
    
};
exports.down = function (knex) {

  return knex.schema
    .dropTable('artists')
    .dropTable('choreographers')
    .dropTable('skaters')
    .dropTable('persons');
};
