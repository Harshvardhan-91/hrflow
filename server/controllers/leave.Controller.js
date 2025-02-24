const LeaveModel = require('../models/leave.model');
const { validationResult } = require('express-validator');
// const { sendMail } = require('../services/email.service');
// const { sendNotification } = require('../services/notification.service');

/**
 * Controller to handle leave application submission
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
module.exports.applyLeave = async (req, res, next) => {
    try {
        // Validate request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Extract data from request body and user
        const { leaveType, startDate, endDate, reason } = req.body;
        const { user } = req;

        if (!user) {
            return res.status(401).json({ error: "Unauthorized access" });
        }

        // Create new leave record in database
        const leave = await LeaveModel.create({
            employee: user._id,
            leaveType,
            startDate,
            endDate,
            reason
        });

        return res.status(201).json({ message: "Leave applied successfully", leave });

    } catch (error) {
        console.error("Error applying leave:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


    // Send confirmation email to employee
    // await sendMail({
    //     to: `${user.email}`,
    //     subject: 'Leave Application',
    //     text: `Your leave application has been submitted successfully.`
    // });

    // Send in-app notification to employee
    // await sendNotification({
    //     to: user._id,
    //     message: 'Your leave application has been submitted successfully.'
    // });

/**
 * Controller to fetch all leaves for a specific employee
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
module.exports.getLeaves = async(req,res,next)=>{
    try {
        const { user } = req;

        if (!user) {
            return res.status(401).json({ error: "Unauthorized access" });
        }

        // Fetch all leaves for the current user
        const leaves = await LeaveModel.find({ employee: user._id });

        return res.status(200).json(leaves);
    } catch (error) {
        console.error("Error fetching leaves:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}