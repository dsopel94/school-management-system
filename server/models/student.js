const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: String,
  lastName: String,
  grade: Number,
  phoneNumber: Number,
});

studentSchema.pre('remove', function callback(next) {
  const Period = mongoose.model('period');
  Period.update({ students: { $in: [this._id] } }, { $pull: { students: this._id } }, { multi: true })
    .then(() => next());
});


const Student = mongoose.model('student', studentSchema);
module.exports = Student;
