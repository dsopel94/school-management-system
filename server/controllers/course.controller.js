import Course from '../models/Course';
import cuid from 'cuid';
// import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Courses
 * @param req
 * @param res
 * @returns void
 */
export function getCourses(req, res) {
  Course.find().exec((err, courses) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ courses });
  });
}
export function addCourse(req, res) {
  if (!req.body.course.name || !req.body.course.startDate || !req.body.course.endDate) {
    res.status(403).end();
  }
  const newCourse = new Course(req.body.course);
  // Let's sanitize inputs
  newCourse.name = sanitizeHtml(newCourse.name);
  newCourse.startDate = sanitizeHtml(newCourse.startDate);
  newCourse.endDate = sanitizeHtml(newCourse.endDate);
  newCourse.cuid = cuid();
  newCourse.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
  return res.json({ message: 'posted' });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ course });
  });
  return res.json({ message: 'got Course' });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteCourse(req, res) {
  Course.findOne({ cuid: req.params.cuid }).exec((err, course) => {
    if (err) {
      res.status(500).send(err);
    }
    course.remove(() => {
      res.status(200).end();
    });
  });
  return res.status(200).end();
}
