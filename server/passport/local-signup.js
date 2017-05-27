const Instructor = require('mongoose').model('Instructor');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
  fullNameField: 'fullName',
  usernameField: 'userName',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, fullName, userName, password, done) => {
  const instructorData = {
    fullName: fullName.trim(),
    userName: userName.trim(),
    password: password.trim(),
  };

  const newInstructor = new Instructor(instructorData);
  newInstructor.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});
