module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'fs_program_db'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
