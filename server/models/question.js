const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnswerSchema = require('./answer');

const QuestionSchema = new Schema({
  question: String,
  answers: [AnswerSchema],
});

module.exports = QuestionSchema;
