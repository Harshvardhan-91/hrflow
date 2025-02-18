const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    leaveType: {
        type: String,
        required: true,
        enum: ['Sick', 'Casual', 'Annual', 'Maternity', 'Paternity', 'Other']
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    appliedDate: {
        type: Date,
        default: Date.now
    },
    comments: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Leave', leaveSchema);