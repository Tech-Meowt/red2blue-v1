import express from 'express';
const router = express.Router();
import Sandbox from '../models/Sandbox.js';

import { create, getAll, updateSandbox } from '../controllers/sandboxController.js'

router.route('/').get(getAll);
router.route('/allSandbox').post(create);
router.route('/:id').patch(updateSandbox);

export default router
