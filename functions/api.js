const express = require('express');
const serverless = require('serverless-http');
const personRouter = require('../src/routes/person');
const programRouter = require('../src/routes/program');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/.netlify/functions/api/v1/program', programRouter);
app.use('/.netlify/functions/api/v1/person', personRouter);

module.exports.handler = serverless(app);
