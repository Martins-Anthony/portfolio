const express = require('express')
const adminCtrl = require('../controllers/admin')
const rateLimit = require('../middleware/rateLimit');
const router = express.Router()

router.post('/login', rateLimit, adminCtrl.login)

module.exports = router
