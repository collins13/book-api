const mongoose = require('mongoose');
const Book = require('../models/Book');

exports.get = (req, res) => {
  const { query } = req;
  Book.find(query)
    .exec()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.post = (req, res) => {
  const book = new Book({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });
  book
    .save()
    .then((result) => {
      res.status(200);
      res.json({ result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getById = (req, res) => {
  const { id } = req.params;
  Book.findById(id)
    .exec()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.put = (req, res) => {
  const { id } = req.params;
  Book.findByIdAndUpdate({ _id: id }, req.body).then(() => {
    boo
      .findOne({ _Id: id })
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  });

  //   const book = Book({
  //     _id: mongoose.Types.ObjectId(),
  //     title: req.body.title,
  //     author: req.body.author,
  //     genre: req.body.genre,
  //     read: req.body.read,
  //   });
  //   book.save()
  res.status(200).json({
    message: 'you updated your product',
  });
};
exports.patch = (req, res) => {
  const { book } = req;
  // eslint-disable-next-line no-underscore-dangle
  if (req.body._id) {
    // eslint-disable-next-line no-underscore-dangle
    delete req.body._id;
  }
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    book[key] = value;
  });
  book.save((err, books) => {
    if (err) {
      return res.send(err);
    }
    return res.status(200).json(books);
  });
};
exports.delete = (req, res) => {
  const { id } = req.params;
  Book.remove({ _id: id }, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.sendStatus(204);
  });
};
