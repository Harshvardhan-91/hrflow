const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const payrollController = require('../controllers/payroll.Controller');

router.get('/', authMiddleware.authUser, payrollController.getPayroll);