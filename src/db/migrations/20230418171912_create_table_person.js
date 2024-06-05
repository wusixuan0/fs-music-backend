exports.up = function(knex) {
  return knex.schema
    .createTable('countries', function(table) {
      table.string('ioc_code').notNullable().primary(); // IOC code as primary key
      table.string('name').notNullable();
    })
    .createTable('disciplines', function(table) {
      table.increments('id').primary();
      table.string('type').notNullable();
    })
    .createTable('persons', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
    })
    .createTable('skaters', function(table) {
      table.increments('id').primary();
      table.integer('person_id').references('persons.id').notNullable();
      table.integer('discipline_id').references('disciplines.id').notNullable();;
      table.string('country_code').references('countries.ioc_code').notNullable();;
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
    .dropTable('persons')
    .dropTable('disciplines')
    .dropTable('countries');
};
