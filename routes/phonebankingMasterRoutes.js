import express from 'express';
const router = express.Router();
import PhonebankingMaster from '../models/PhonebankingMaster.js';

import { create, getAll, updatePhonebankingMaster, deletePhonebankingMaster } from '../controllers/phonebankingMasterController.js'

router.route('/').get(getAll);
router.route('/allPhonebankingMaster').post(create);
router.route('/:id').patch(updatePhonebankingMaster);
router.route('/:id').delete(deletePhonebankingMaster);

export default router;
