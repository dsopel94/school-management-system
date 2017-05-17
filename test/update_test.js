require('chai').should();
const Student = require('../server/models/student');
const Period = require('../server/models/period');
const Course = require('../server/models/course');
const Instructor = require('../server/models/instructor');

describe('Updating records', () => {
  let joe;
  let AlgebraOne;
  let Algebra;
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

    Algebra = new Course({
      name: 'Algebra',
      startDate: Date.now(),
      endDate: Date.now(),
      instructors: [rob],
      students: [joe]
    });

    rob = new Instructor({
      fullName: 'rob',
      courses: [Algebra],
      username: 'rob1',
      password: 'Password1'
    });
    Promise.all([joe.save(), AlgebraOne.save(), Algebra.save(), rob.save()]).then(() => done());
  });

  it('should update a students first name', (done) => {
    Student.findByIdAndUpdate(joe._id, { firstName: 'Alex' })
      .then(() => Student.findById(joe._id))
      .then(student => {
        student.firstName.should.equal('Alex');
        done();
      });
  });
  it('should update a periods number and duration', (done) => {
    Period.findByIdAndUpdate(AlgebraOne._id, {
      number: 2,
      duration: 120
    })
      .then(() => Period.findById(AlgebraOne._id))
      .then(period => {
        period.number.should.equal(2);
        period.duration.should.equal(120);
        done();
      });
  });
  it('should update a course name', (done) => {
    Course.findByIdAndUpdate(Algebra._id, {
      name: 'Geometry'
    })
      .then(() => Course.findById(Algebra._id))
      .then(course => {
        course.name.should.equal('Geometry');
        done();
      });
  });
  it('should update an instructor\'s name', (done) => {
    Instructor.findByIdAndUpdate(rob._id, {
      fullName: 'Tim'
    })
      .then(() => Instructor.findById(rob._id))
      .then(instructor => {
        instructor.fullName.should.equal('Tim');
        done();
      });
  });
});
