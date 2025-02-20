const Payroll = require('../models/payroll.model'); // Assuming you have a Payroll model
const Employee = require('../models/user.model'); // Assuming you have an Employee model

// Function to get payroll details by employee ID
exports.getPayrollsByEmployeeId = async (req, res) => {
    try {
        const {user}= req;
        const {employeeId} = user._id;

        // Check if employee exists
        const employee = await Employee.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Get payrolls for the employee
        const payrolls = await Payroll.find({ employeeId: employeeId });

        res.status(200).json(payrolls);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};