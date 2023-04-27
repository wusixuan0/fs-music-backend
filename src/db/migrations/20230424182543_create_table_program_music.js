exports.up = function(knex) {
  return knex.schema
    .createTable('musics', function(table) {
      table.increments('id').primary();
      table.string('title', 255);
    })
    .createTable('programs', function(table) {
      table.increments('id').primary();
      table.string('program_type', 255).notNullable();
      table.integer('skater_id').references('skaters.id').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('programs')
    .dropTable('musics')  
};
