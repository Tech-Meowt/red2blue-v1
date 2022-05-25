import express from 'express';
const router = express.Router();
import Sandbox from '../models/Sandbox.js';

import { create, getAll, updateSandbox, deleteSandbox } from '../controllers/sandboxController.js'

router.route('/').get(getAll);
router.route('/allSandbox').post(create);
router.route('/:id').patch(updateSandbox);
router.route('/:id').delete(deleteSandbox);

export default router
