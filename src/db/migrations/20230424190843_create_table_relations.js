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
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('program_choreographer')
    .dropTable('program_skater') 
};
