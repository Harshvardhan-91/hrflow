const payroll = require('../models/payroll.model');
const {validationResult} = require('express-validator');

module.exports.getPayroll = async (req, res, next) => {
    try{
        const {user}= req;
        if(!user){
            return res.status(401).json({error: "Unauthorized access"});
        }
        const payroll = await payroll.find({employee: user._id});
        return res.status(200).json({payroll});
    }catch(err){
        console.error("Error fetching payroll:", err);
        return res.status(500).json({error: "Internal Server Error"});
    }
}
