const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./question');

const AssignmentSchema = new Schema({
  completed: Boolean,
  title: String,
  questions: [QuestionSchema]
});

module.exports = AssignmentSchema;
