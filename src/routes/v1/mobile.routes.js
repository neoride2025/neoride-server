const express = require('express');
const router = express.Router();

const authCtrl = require('../../api/v1/mobile/controllers/auth.controller');
const rideCtrl = require('../../api/v1/mobile/controllers/ride.controller');
const profileCtrl = require('../../api/v1/mobile/controllers/profile.controller');
const supportCtrl = require('../../api/v1/mobile/controllers/support.controller');

// account
router.post('/auth/login', authCtrl.login);
router.post('/auth/register', authCtrl.register);
router.post('/auth/verify', authCtrl.verifyOtp);
router.post('/auth/forgot-password', authCtrl.forgotPassword);
router.post('/auth/reset-password', authCtrl.resetPassword);

// ride
router.post('/ride', rideCtrl.createRide);
router.get('/ride/history', rideCtrl.rideHistory);

// profile
router.get('/profile', profileCtrl.getProfile);
router.put('/profile', profileCtrl.updateProfile);

// support
router.post('/support/chat', supportCtrl.startChat);
router.get('/support/chat/:id', supportCtrl.getChat);

module.exports = router;
