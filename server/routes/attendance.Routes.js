const express = require('express');
const router = express.Router();
const {markAttendance,getAttendance} = require('../controllers/attendance.Controller');
const auth = require('../middlewares/auth.middleware');
const { body } = require('express-validator');

router.post('/mark-attendance', [
    auth.authUser,
    body('date').isDate().withMessage('Invalid date'),
    body('status').isIn(['Present', 'Absent']).withMessage('Invalid status')
], auth.authUser,markAttendance);

router.get('/get-attendance', auth.authUser,getAttendance);

module.exports = router;