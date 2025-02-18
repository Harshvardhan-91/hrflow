const LeaveModel = require('../models/leave.Model');
const { validationResult } = require('express-validator');
const { sendMail } = require('../services/email.service');
const { sendNotification } = require('../services/notification.service');

module.exports.applyLeave = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {leaveType, startDate, endDate, reason} = req.body;
    const {user} = req;
    const leave = await LeaveModel.create({
        employee: user._id,
        leaveType,
        startDate,
        endDate,
        reason
    });
    await sendMail({
        to: `${user.email}`,
        subject: 'Leave Application',
        text: `Your leave application has been submitted successfully.`
    });
    await sendNotification({
        to: user._id,
        message: 'Your leave application has been submitted successfully.'
    });
}
module.exports.getLeaves = async(req,res,next)=>{
    const {user} = req;
    const leaves = await LeaveModel.find({employee: user._id});
    res.status(200).json(leaves);
}