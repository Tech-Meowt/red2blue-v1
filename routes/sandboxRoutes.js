import express from 'express';
const router = express.Router();

import {
  create,
  getAll,
  updateSandbox,
  deleteSandbox,
} from '../controllers/sandboxController.js';

router.route('/').get(getAll);
router.route('/create').post(create);
router.route('/:id').patch(updateSandbox);
router.route('/:id').delete(deleteSandbox);

export default router;
