const Student = require('../models/student');

module.exports = {
  get:(req, res, next)
    Student.find()
    .then(students => res.json(students))
    .catch(next)
};
