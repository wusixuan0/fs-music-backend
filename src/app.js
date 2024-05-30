const express = require('express');
const cors = require('cors');
const personRouter = require('./routes/person');
const programRouter = require('./routes/program');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/program', programRouter);
app.use('/api/v1/person', personRouter);

module.exports = app;