const express = require('express');
const app = express();  
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');   
dotenv.config();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const leaveRoutes = require('./routes/leave.Routes');
const attendanceRoutes = require('./routes/attendance.Routes');
const payrollController = require('./controllers/payroll.Controller');
const shitController = require('./controllers/shift.Controller');

connectToDb();

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.use('/users',userRoutes);
app.use('/leaves',leaveRoutes);
app.use('/attendance',attendanceRoutes);
app.get('/payroll',payrollController.getPayroll);
app.get('/shits',shitController.getShifts);


module.exports = app;