exports.up = function(knex) {
  return knex.schema
    .createTable('program_types', function(table) {
      table.increments('id').primary();
      table.string('type').notNullable();
    })
    .createTable('musics', function(table) {
      table.increments('id').primary();
      table.string('title', 255).notNullable();
      table.string('artist_info', 255);
    })
    .createTable('programs', function(table) {
      table.increments('id').primary();
      table.integer('program_type_id').references('program_types.id').notNullable();
      table.integer('skater_id').references('skaters.id').notNullable();
    })
    .createTable('program_music', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('music_id').references('musics.id').notNullable();
      table.primary(['program_id', 'music_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('program_music')
    .dropTable('programs')
    .dropTable('program_types')  
    .dropTable('musics')  
};
