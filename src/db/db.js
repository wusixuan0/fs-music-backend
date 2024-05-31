const knex = require('knex')
const knexfile = require('./knexfile');
const environment = 'production'

const db = knex(knexfile[environment])

module.exports = db;
