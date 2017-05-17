import Student from './models/student';

export default function () {
  Student.count().exec((err, count) => {
    if (count > 0) {
      return;
    }


    const student = new Student({ firstName: 'john', lastName: 'Smith', grade: '90', phoneNumber: '7732005555' });

    Student.create(student, (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
