const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const leaveController = require('../controllers/leave.Controller');
const authMiddleware = require('../middlewares/auth.middleware');
router.post('/apply', [
    body('leaveType').isIn(['Sick', 'Casual', 'Annual', 'Maternity', 'Paternity', 'Other']).withMessage('Invalid Leave Type'),
    body('startDate').isISO8601().withMessage('Invalid Start Date'),
    body('endDate').isISO8601().withMessage('Invalid End Date'),
    body('reason').isLength({ min: 10 }).withMessage('Reason must be atleast 10 characters long')
], authMiddleware.authUser, leaveController.applyLeave);
router.get('/applications', authMiddleware.authUser, leaveController.getLeaves);
module.exports = router;
