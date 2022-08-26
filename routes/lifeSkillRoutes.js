import express from 'express';
const router = express.Router();

import { create, getAll, updateLifeSkill, deleteLifeSkill } from '../controllers/lifeSkillsController.js'

router.route('/').get(getAll);
router.route('/addLifeSkill').post(create)
router.route('/:id').patch(updateLifeSkill)
router.route('/:id').delete(deleteLifeSkill)

export default router;

