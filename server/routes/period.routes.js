import { Router } from 'express';
import * as PeriodController from '../controllers/period.controller';
const router = new Router();

// Get all Posts
router.route('/Periods').get(PeriodController.getPeriods);

// Get one post by cuid
router.route('/Periods/:cuid').get(PeriodController.getPeriod);

// Add a new Post
router.route('/Periods').post(PeriodController.addPeriod);

// Delete a post by cuid
router.route('/Periods/:cuid').delete(PeriodController.deletePeriod);

export default router;
// just so that you have this file as a template
