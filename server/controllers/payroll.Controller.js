const Payroll = require('../models/payroll.model'); // Capital P to avoid naming conflict
const {validationResult} = require('express-validator');

// For middleware usage, you can create a separate middleware function
const authMiddleware = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({error: "Unauthorized access"});
    }
    next();
};

// Your route handler
const getPayroll = async (req, res, next) => {
    try {
        const payrollData = await Payroll.find({employee: req.user._id});
        return res.status(200).json({payroll: payrollData});
    } catch(err) {
        console.error("Error fetching payroll:", err);
        return res.status(500).json({error: "Internal Server Error"});
    }
};

module.exports = {
    authMiddleware,
    getPayroll
};
