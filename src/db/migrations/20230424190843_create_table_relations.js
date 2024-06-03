exports.up = function(knex) {
  return knex.schema
    .createTable('program_skater', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('skater_id').references('skaters.id').notNullable();
      table.primary(['program_id', 'skater_id']);
    })

    .createTable('program_choreographer', function(table) {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('choreographer_id').references('choreographers.id').notNullable();
      table.primary(['program_id', 'choreographer_id']);
    })

    .createTable('artist_music', function(table) {
      table.integer('artist_id').references('artists.id').notNullable();
      table.integer('music_id').references('musics.id').notNullable();
      table.primary(['artist_id', 'music_id']);
      // table.string('role', 255); //composer, performed_by
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('artist_music')
    .dropTable('program_choreographer')
    .dropTable('program_skater') 
};
