const mongoose = require('mongoose');
const ShiftModel = new mongoose.Schema({
    shiftName: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true

});
module.exports = mongoose.model('Shift', ShiftModel);