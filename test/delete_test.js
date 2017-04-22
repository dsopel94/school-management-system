require('chai').should();
const Student = require('../server/models/student');
const Period = require('../server/models/period');
const Course = require('../server/models/course');
const Instructor = require('../server/models/instructor');

describe('Deleting records', () => {
  let joe;
  let algebraOne;
  let algebra;
  let rob;
  let englishTwo;
  let english;

  beforeEach((done) => {
    joe = new Student({ firstName: 'joe', lastName: 'smith', grade: 93, phoneNumber: 7146034875 });
    rob = new Instructor({ fullName: 'rob', username: 'rob1', password: 'Password1' });
    algebraOne = new Period({ number: 1, start: Date.now(), duration: 90, students: [joe] });
    englishTwo = new Period({ number: 2, start: Date.now(), duration: 90, students: [joe] });

    english = new Course({ name: 'English', startDate: Date.now(), endDate: Date.now(), instructors: [rob], periods: [englishTwo] });

    algebra = new Course({ name: 'Algebra', startDate: Date.now(), endDate: Date.now(), instructors: [rob], periods: [algebraOne] });
    Promise.all([
      joe.save(),
      algebraOne.save(),
      algebra.save(),
      rob.save(),
      english.save(),
      englishTwo.save()
    ])
    .then(() => done());
  });
  it('should delete a student and its relationships', (done) => {
    joe.remove().then(() => Student.count()).then((count) => {
      count.should.equal(0);
      return Period.find({});
    })
    .then((periods) => {
      periods[0].students.length.should.equal(0);
      periods[1].students.length.should.equal(0);
      done();
    });
  });

  it('should delete a period and its relationships', (done) => {
    algebraOne.remove().then(() => Period.count()).then((count) => {
      count.should.equal(1);
      return Course.find({});
    })
    .then((courses) => {
      courses[0].periods.length.should.equal(0);
      done();
    });
  });

  it('should delete a course and its relationships', (done) => {
    algebra.remove().then(() => Course.count()).then((count) => {
      count.should.equal(1);
      done();
    });
  });

  it('should delete an instructor and its relationships', (done) => {
    rob.remove().then(() => Instructor.count()).then((count) => {
      count.should.equal(0);
      return Course.find({});
    })
    .then((courses) => {
      courses[0].instructors.length.should.equal(0);
      done();
    });
  });
});
