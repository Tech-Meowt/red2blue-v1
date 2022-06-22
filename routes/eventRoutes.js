import express from 'express';
const router = express.Router();
import Event from '../models/Event.js';

import {
  create,
  getAll,
  updateEvent,
  deleteEvent,
  getOne,
} from '../controllers/eventsController.js';

router.route('/').get(getAll);
router.route('/addEvent').post(create);
router.route('/:id').get(getOne);
router.route('/:id').patch(updateEvent);
router.route('/:id').delete(deleteEvent);

export default router;
