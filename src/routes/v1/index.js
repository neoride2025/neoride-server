const express = require('express');
const router = express.Router();

// router.use('/mobile', require('./mobile.routes'));
router.use('/admin', require('./admin/admin.routes'));
// router.use('/public', require('./public.routes'));
router.use('/auth', require('./admin/auth.routes'));

module.exports = router;
