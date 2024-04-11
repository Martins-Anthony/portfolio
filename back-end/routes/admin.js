const express = require('express')
const adminCtrl = require('../controllers/admin')
const rateLimit = require('../middleware/rateLimit');
const router = express.Router()

// router.post('/signup', adminCtrl.signup)
router.post('/login', adminCtrl.login)

module.exports = router
