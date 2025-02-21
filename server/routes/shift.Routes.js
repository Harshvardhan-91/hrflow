const express = require('express');
const router = express.Router();
const shiftController = require('../controllers/shift.controller');
const auth = require('../middleware/auth');

router.get('/', auth, shiftController.getShifts);
