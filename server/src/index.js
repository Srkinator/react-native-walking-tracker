const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const { mongoUri } = require('../config')
const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});