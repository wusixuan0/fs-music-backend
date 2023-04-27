exports.up = function (knex) {
  return knex.schema.createTable('seasons', (table) => {
    table.increments('id').primary();
    table.string('season_year').notNullable();
  }).then(() => {
    return knex.schema.createTable('program_seasons', (table) => {
      table.integer('program_id').references('programs.id').notNullable();
      table.integer('season_id').references('seasons.id').notNullable();
      table.primary(['program_id', 'season_id']);
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('program_seasons')
    .then(() => {
      return knex.schema.dropTable('seasons');
    });
};