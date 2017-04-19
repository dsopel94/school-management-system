const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  fullName: String,
  username: String,
  password: String,
});

instructorSchema.pre('remove', function callback(next) {
  const Course = mongoose.model('course');
  Course.update({ instructors: { $in: [this._id] } }, { $pull: { instructors: this._id } }, { multi: true })
    .then(() => next());
});

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;
