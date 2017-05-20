import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
const router = new Router();

// Get all Posts
router.route('/Courses').get(CourseController.getCourses);

// Get one post by cuid
router.route('/Courses/:cuid').get(CourseController.getCourse);

// Add a new Post
router.route('/Courses').post(CourseController.addCourse);

// Delete a post by cuid
router.route('/Courses/:cuid').delete(CourseController.deleteCourse);

export default router;
// just so that you have this file as a template
