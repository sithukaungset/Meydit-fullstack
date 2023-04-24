const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Postgres database part
const { Pool } = require('pg');


dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

const jobRouter = require('./routes/jobs'); // Import the job router

const pool = new Pool({
  user: 'sithukaungset',
  host: 'localhost',
  database: 'meydit',
  password: 'geniusraver27',
  port: 5432,
});

const userRouter = require('./routes/user')(pool); //Import and pass the pool to the user router

app.use(cors());
app.use(bodyParser.json());
app.use('/api/jobs', jobRouter); // Add the jobs route
app.use('/api/users', userRouter); // Add the users route
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
