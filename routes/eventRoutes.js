import express from 'express';
const router = express.Router();

import {
  create,
  getAll,
  updateEvent,
  deleteEvent,
  getOne,
} from '../controllers/eventsController.js';

import {
  createEvent
} from '../controllers/eventInfoController.js'

import {
  createAttendee
} from '../controllers/attendeesController.js'

router.route('/').get(getAll);
// router.route('/addEvent').post(create);
router.route('/addEvent').post(createEvent)
router.route('/addAttendee').post(createAttendee)
router.route('/:id').get(getOne);
router.route('/:id').patch(updateEvent);
router.route('/:id').delete(deleteEvent);

export default router;
