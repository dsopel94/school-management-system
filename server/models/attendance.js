const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AttendanceSchema = new Schema({
  currentDate: Date,
  isPresent: Boolean,
  isAbsent: Boolean,
  isLateExcused: Boolean,
  isLateUnexcused: Boolean,
  student: {
    type: ObjectId,
    ref: 'student',
  }
});

module.exports = AttendanceSchema;
