const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const AttendanceSchema = require('./attendance');
const AssignmentSchema = require('./assignment');

const periodSchema = new Schema({
  number: Number,
  start: Date,
  duration: Number,
  assignments: [AssignmentSchema],
  students: [
    {
      type: ObjectId,
      ref: 'student',
    },
  ],
  attendance: [AttendanceSchema],
});

periodSchema.pre('remove', function callback(next) {
  const Course = mongoose.model('course');
  Course.update({
    periods: {
      $in: [this._id],
    },
  }, {
    $pull: {
      periods: this._id,
    },
  }).then(() => next());
});

const Period = mongoose.model('period', periodSchema);
module.exports = Period;
