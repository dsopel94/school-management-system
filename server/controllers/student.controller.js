import Student from '../models/student';
<<<<<<< HEAD
import cuid from 'cuid';
// import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all students
=======
// import cuid from 'cuid';
// import slug from 'limax';
// import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
>>>>>>> 928ccbb194588f035f9433c4fe22c5dc16d566d4
 * @param req
 * @param res
 * @returns void
 */
export function getStudents(req, res) {
<<<<<<< HEAD
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
=======
  Student.find().exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addStudent(req, res) {
  /*
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
>>>>>>> 928ccbb194588f035f9433c4fe22c5dc16d566d4
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
<<<<<<< HEAD
  return res.json({ message: 'posted' });
=======
  */
  return res.json({ "message":"posted" })
>>>>>>> 928ccbb194588f035f9433c4fe22c5dc16d566d4
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getStudent(req, res) {
<<<<<<< HEAD
  Student.findOne({ cuid: req.params.cuid }).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ student });
  });
  return res.json({ message: 'got student' });
=======
  // Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //   res.json({ post });
  // });
  return res.json({"message":"got student"})
>>>>>>> 928ccbb194588f035f9433c4fe22c5dc16d566d4
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteStudent(req, res) {
<<<<<<< HEAD
  Student.findOne({ cuid: req.params.cuid }).exec((err, student) => {
    if (err) {
      res.status(500).send(err);
    }
    student.remove(() => {
      res.status(200).end();
    });
  });
=======
  /*Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });*/
>>>>>>> 928ccbb194588f035f9433c4fe22c5dc16d566d4
  return res.status(200).end();
}
