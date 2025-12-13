const express = require('express');
const router = express.Router();

// router.use('/mobile', require('./mobile.routes'));
// router.use('/admin', require('./admin.routes'));
router.use('/public', require('./public.routes'));

module.exports = router;
