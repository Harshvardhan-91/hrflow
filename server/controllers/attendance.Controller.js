const Attendance = require('../models/attendance.model');
const { validationResult } = require('express-validator');
const { sendMail } = require('../services/email.service');
const { sendNotification } = require('../services/notification.service');

exports.markAttendance = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, date, status } = req.body;

    try {
        const attendance = new Attendance({ userId, date, status });
        await attendance.save();

        // Send email notification
        // await sendMail(userId, 'Attendance marked', `Your attendance for ${date} has been marked as ${status}.`);

        // // Send app notification
        // await sendNotification(userId, 'Attendance marked', `Your attendance for ${date} has been marked as ${status}.`);

        res.status(201).json({ message: 'Attendance marked successfully', attendance });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};