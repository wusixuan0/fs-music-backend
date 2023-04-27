exports.up = function(knex) {
  return knex.schema
    .createTable('program_musics', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('music_id').references('musics.id').notNullable();
      table.primary(['program_id', 'music_id']);
    })

    .createTable('program_skaters', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('skater_id').references('skaters.id').notNullable();
      table.primary(['program_id', 'skater_id']);
    })

    .createTable('program_choreographers', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('choreographer_id').references('choreographers.id').notNullable();
      table.primary(['program_id', 'choreographer_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('program_choreographers')
    .dropTable('program_skaters')
    .dropTable('program_musics') 
};
