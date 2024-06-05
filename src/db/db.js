require('dotenv').config();

const knex = require('knex')
const knexfile = require('./knexfile');
const environment = process.env.NODE_ENV || 'production';

const db = knex(knexfile[environment])

module.exports = db;
