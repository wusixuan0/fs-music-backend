module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'knex_tutorials' // TODO
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
