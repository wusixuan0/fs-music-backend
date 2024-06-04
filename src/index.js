const express = require('express');
const cors = require('cors');
// const personRouter = require('./routes/person');
// const programRouter = require('./routes/program');
const musicRouter = require('./routes/music');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/music', musicRouter);
// app.use('/api/v1/program', programRouter);
// app.use('/api/v1/person', personRouter);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
