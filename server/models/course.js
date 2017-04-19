const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const courseSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  instructors: [{
    type: ObjectId,
    ref: 'instructor',
  }],
  periods: [{
    type: ObjectId,
    ref: 'period',
  }],
});

const Course = mongoose.model('course', courseSchema);

module.exports = Course;
