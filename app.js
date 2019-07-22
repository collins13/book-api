const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const bookRoute = require('./src/routes/books');

if (process.env.ENV === 'Test') {
  console.log('this is a test');
  mongoose.connect('mongodb://localhost/books_api', { useNewUrlParser: true });
} else {
  console.log('test done');
  mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true });
}

// mongoose.connect('mongodb://localhost/books', { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/books', bookRoute);

app.get('/', (req, res) => {
  res.send('hello baby');
});

app.listen(port, () => console.log(`port liten to ${port}`));
module.exports = app;
