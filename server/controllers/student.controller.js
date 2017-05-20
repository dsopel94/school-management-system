import Student from '../models/student';
import cuid from 'cuid';
// import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


export function getStudents(req, res) {
  Student.find().exec((err, students) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ students });
  });
}
export function addStudent(req, res) {
  if (!req.body.student.firstName || !req.body.student.lastName || !req.body.student.grade || !req.body.student.phoneNumber) {
    res.status(403).end();
  }
  const newStudent = new Student(req.body.student);
  // Let's sanitize inputs
  newStudent.firstName = sanitizeHtml(newStudent.firstName);
  newStudent.lastName = sanitizeHtml(newStudent.lastName);
  newStudent.grade = sanitizeHtml(newStudent.grade);
  newStudent.phoneNumber = sanitizeHtml(newStudent.phoneNumber);
  newStudent.cuid = cuid();
  newStudent.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

export function getStudent(req, res) {
  Student.findOne({ cuid: req.params.cuid }).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ student });
  });
  return res.json({ message: 'got student' });
}

export function deleteStudent(req, res) {
  Student.findOne({ cuid: req.params.cuid }).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    student.remove(() => {
      res.status(200).end();
    });
  });
  return res.status(200).end();
}
