exports.up = function(knex) {
  return knex.schema.table('musics', function(table) {
    table.string('source');
  });
  return knex.schema.table('programs', function(table) {
    table.string('program_name');
  });
};

exports.down = function(knex) {
  return knex.schema.table('musics', function(table) {
    table.dropColumn('source');
  });
  return knex.schema.table('programs', function(table) {
    table.dropColumn('program_name');
  });
};