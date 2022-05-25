import express from 'express';
const router = express.Router();
import Sandbox from '../models/Sandbox.js';

import { create, getAll } from '../controllers/sandboxController.js'

router.route('/allSandbox').post(create);
router.route('/').get(getAll);

export default router
