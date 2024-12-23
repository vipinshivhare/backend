const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  qrCode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QRCode'
  }
});

const TodoSchema = mongoose.model('TodoSchema', todoSchema, 'TodoAppCollections');

module.exports = { TodoSchema };
