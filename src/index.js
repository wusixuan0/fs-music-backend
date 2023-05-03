const express = require('express');
const personRouter = require('./routes/person');
const programRouter = require('./routes/program');
const cors = require("cors");

const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   const { method, path } = req;
//   console.log(
//   `New request to: ${method} ${path} at ${new Date().toISOString()}`
//   );
//   next();
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/program', programRouter);
app.use('/api/v1/person', personRouter);

const port = 3001;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
