import express from 'express';
const router = express.Router();
import Volunteer from '../models/Volunteer.js';

import { create, getAll, updateVolunteer, deleteVolunteer } from '../controllers/volunteersController.js';

router.route('/').get(getAll);
router.route('/addVolunteer').post(create);
router.route('/:id').patch(updateVolunteer);
router.route('/:id').delete(deleteVolunteer);

export default router;
