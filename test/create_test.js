require('chai').should();
const Course = require('../server/models/course');
const Student = require('../server/models/student');
const Instructor = require('../server/models/instructor');
const Period = require('../server/models/period');


describe('Creating records', () => {
  it('saves a course', (done) => {
    const math = new Course({
      name: 'Algebra 101',
      startDate: Date.now(),
      endDate: Date.now()
    });

    math.save()
      .then(() => {
        math.isNew.should.equal(false);
        math.name.should.equal('Algebra 101');
        done();
      });
  });
});

describe('Creating students', () => {
  it('saves a student', (done) => {
    const student = new Student({
      firstName: 'Josh',
      lastName: 'Jackson',
      grade: 100,
      phoneNumber: 3128675309
    });

    student.save()
      .then(() => {
        student.isNew.should.equal(false);
        done();
      });
  });
});

describe('Creating instructors', () => {
  it('saves an instructor', (done) => {
    const instructor = new Instructor({
      fullName: 'Dan Feeley',
      username: 'danf',
      password: 'Password1'
    });

    instructor.save()
      .then(() => {
        instructor.isNew.should.equal(false);
        done();
      });
  });
});

describe('Creating periods', () => {
  it('saves a period', (done) => {
    const period = new Period({
      number: 1,
      start: Date.now(),
      duration: 90,
      assignments: [{
        completed: true,
        title: 'Math Quiz',
        questions: [{
          question: '2 + 2 = ?',
          answers: [{
            answer: 4,
            isCorrect: true
          }]
        }]
      }]
    });

    period.save()
      .then(() => {
        period.isNew.should.equal(false);
        done();
      });
  });
});
