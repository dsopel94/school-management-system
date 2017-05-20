import { Router } from 'express';
import * as StudentController from '../controllers/student.controller';
const router = new Router();

// Get all Posts
router.route('/students').get(StudentController.getStudents);

// Get one post by cuid
router.route('/students/:cuid').get(StudentController.getStudent);

// Add a new Post
router.route('/students').post(StudentController.addStudent);

// Delete a post by cuid
router.route('/students/:cuid').delete(StudentController.deleteStudent);

export default router;
// just so that you have this file as a template
