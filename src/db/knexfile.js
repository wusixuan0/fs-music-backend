require('dotenv').config()

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

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: './seeds',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
