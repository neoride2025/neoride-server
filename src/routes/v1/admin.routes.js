const express = require('express');
const router = express.Router();

const authCtrl = require('../../api/v1/admin/controllers/adminAuth.controller');
const dashboardCtrl = require('../../api/v1/admin/controllers/dashboard.controller');
const moderatorCtrl = require('../../api/v1/admin/controllers/moderator.controller');
const userCtrl = require('../../api/v1/admin/controllers/user.controller');
const policyCtrl = require('../../api/v1/admin/controllers/policy.controller');
const supportCtrl = require('../../api/v1/admin/controllers/support.controller');
const notificationCtrl = require('../../api/v1/admin/controllers/notification.controller');
const paymentCtrl = require('../../api/v1/admin/controllers/payment.controller');
const serviceTypeController = require('../../api/v1/admin/controllers/serviceType.controller');

// auth
router.post('/login', authCtrl.login);

// dashboard
router.get('/dashboard/summary', dashboardCtrl.summary);

// moderators
router.get('/moderators', moderatorCtrl.list);
router.post('/moderators', moderatorCtrl.create);
router.put('/moderators/:id', moderatorCtrl.update);
router.delete('/moderators/:id', moderatorCtrl.remove);

// users
router.get('/users', userCtrl.list);
router.get('/users/:id', userCtrl.details);
router.put('/users/:id', userCtrl.update);
router.delete('/users/:id', userCtrl.remove);

// policy
router.get('/policy', policyCtrl.getAll);
router.post('/policy', policyCtrl.createOrUpdate);

// support
router.get('/support/chats', supportCtrl.listChats);
router.get('/support/chats/:id', supportCtrl.chatDetails);

// notifications
router.get('/notifications', notificationCtrl.list);

// payments
router.get('/payments', paymentCtrl.list);
router.post('/payments/:id/refund', paymentCtrl.refund);

// contact us
router.get('/list', serviceTypeController.list);
router.post('/create', serviceTypeController.create);


module.exports = router;
