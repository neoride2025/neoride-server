const express = require('express');
const router = express.Router();

const contactCtrl = require('../../api/v1/public/controllers/contact.controller');
const blogCtrl = require('../../api/v1/public/controllers/blog.controller');
const commentCtrl = require('../../api/v1/public/controllers/comment.controller');
const utilsCtrl = require('../../api/v1/public/controllers/utils.controller');
const { contactLimiter } = require('../../middlewares/rateLimiter.middleware');

// contact us
router.get('/service-types', utilsCtrl.serviceTypes);
router.post('/contact', contactLimiter, contactCtrl.submit);

// blogs
router.get('/blogs', blogCtrl.list);
router.get('/blogs/:slug', blogCtrl.details);

// comments
router.post('/comments', commentCtrl.create);
router.get('/comments/:refId', commentCtrl.list);

// utils
router.get('/privacy-policy', utilsCtrl.privacy);
router.get('/terms-conditions', utilsCtrl.terms);
router.get('/contact-info', utilsCtrl.contactInfo);

module.exports = router;
