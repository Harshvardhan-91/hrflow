const express = require('express');
const router = express.Router();
const attendance = require('../controllers/attendance.controller');
const auth = require('../middlewares/auth.middleware');
const { body } = require('express-validator');

router.post('/mark-attendance', [
    auth.authUser,
    body('date').isDate().withMessage('Invalid date'),
    body('status').isIn(['Present', 'Absent']).withMessage('Invalid status')
], auth,attendance.markAttendance);

router.get('/get-attendance', auth.authUser, attendance.getAttendance);

module.exports = router;