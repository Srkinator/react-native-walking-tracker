const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

app.get('/', (req, res) => {
  res.send(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});