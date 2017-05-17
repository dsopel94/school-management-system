const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server/test-server');
const Student = require('../../server/models/student');
chai.should();
chai.use(chaiHttp);

describe('The students controller', () => {
  it('handles a POST request to /students', (done) => {
    Student.count().then(count => {
      chai.request(app)
      .post('/students')
      .send({
        firstName: 'joe',
        lastName: 'smith',
        grade: 80,
        phoneNumber: 7735087000,
      })
      .end((err) => {
        if (err) { return done(err); }

        return Student.count()
        .then(newCount => {
          newCount.should.equal(count + 1);
          done();
        })
        .catch(error => done(error));
      });
    });
  });
});
