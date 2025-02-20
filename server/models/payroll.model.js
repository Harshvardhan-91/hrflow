const mongoose = require('mongoose');
const payrollSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    deductions: {
        type: Number,
        required: true
    },
    netSalary: {
        type: Number,
        required: true
    },
    payDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('payroll', payrollSchema);