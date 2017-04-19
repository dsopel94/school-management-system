const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  answer: String,
  isCorrect: Boolean
});

module.exports = AnswerSchema;
