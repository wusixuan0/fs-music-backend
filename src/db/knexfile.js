module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'knex_tutorials' // TODO
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
