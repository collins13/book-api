const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  read: { type: Boolean, default: false },
});

module.exports = mongoose.model('Book', bookSchema);
