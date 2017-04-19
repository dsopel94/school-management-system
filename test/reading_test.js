require('chai').should();
const Student = require('../server/models/student');
const Period = require('../server/models/period');
const Course = require('../server/models/course');
const Instructor = require('../server/models/instructor');

describe('Reading records', () => {
  let joe;
  let AlgebraOne;
  let algebra;
  let rob;

  beforeEach((done) => {
    joe = new Student({
      firstName: 'Joe',
      periods: [AlgebraOne]
    });

    AlgebraOne = new Period({
      number: 1,
      start: Date.now(),
      duration: 90,
      students: [joe]
    });

    algebra = new Course({
      name: 'Algebra',
      startDate: Date.now(),
      endDate: Date.now(),
      instructors: [rob],
      students: [joe]
    });

    rob = new Instructor({
      fullName: 'rob',
      courses: [algebra],
      username: 'rob1',
      password: 'Password1'
    });

    Promise.all([joe.save(), AlgebraOne.save(), algebra.save(), rob.save()]).then(() => done());
  });

  it('finds all users by the name of joe', (done) => {
    Student.find({ firstName: 'Joe' })
      .then((students) => {
        students[0]._id.toString().should.equal(joe._id.toString());
        students[0].firstName.should.equal('Joe');
        done();
      });
  });
  it('finds all first periods', (done) => {
    Period.find({ number: 1 })
      .then((periods) => {
        periods[0]._id.toString().should.equal(AlgebraOne._id.toString());
        periods[0].students[0].toString().should.equal(joe._id.toString());
        done();
      });
  });
  it('finds all first instructors', (done) => {
    Instructor.find({ fullName: 'rob' })
      .then((instructors) => {
        instructors[0]._id.toString().should.equal(rob._id.toString());
        done();
      });
  });
  it('finds all first courses', (done) => {
    Course.find({ name: 'Algebra' })
      .then((courses) => {
        courses[0]._id.toString().should.equal(algebra._id.toString());
        done();
      });
  });
});
