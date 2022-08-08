import express from 'express';
const router = express.Router();

import { create, getAll, updatePoliticalSkill, deletePoliticalSkill } from '../controllers/politicalSkillsController.js'

router.route('/').get(getAll)
router.route('/addSkill').post(create);
router.route('/:id').patch(updatePoliticalSkill)
router.route('/:id').delete(deletePoliticalSkill);

export default router;
