const Attendance = require('../models/attendance.model');
const LeaveModel = require('../models/leave.model');
const { validationResult } = require('express-validator');
// const { sendMail } = require('../services/email.service');
// const { sendNotification } = require('../services/notification.service');

module.exports.markAttendance = async (req, res, next) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { date, status } = req.body;
        const { user } = req;

        if(!user){
            return res.status(401).json({ error: "Unauthorized access" });
        }
        const attendance = await Attendance.create({
            employee: user._id,
            date,
            status
        });
        return res.status(201).json({ message: "Attendance marked successfully", attendance });

    }catch(error){
        console.error("Error marking attendance:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.getAttendance = async (req, res, next) => {
    try{
        const { user } = req;
        if(!user){
            return res.status(401).json({ error: "Unauthorized access" });
        }
        const attendance = await Attendance.find({ employee: user._id });
        return res.status(200).json({ attendance });
    }catch(error){
        console.error("Error fetching attendance:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}