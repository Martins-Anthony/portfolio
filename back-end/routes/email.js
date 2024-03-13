const express = require('express')
const router = express.Router()
const emailCtrl = require('../controllers/email')
const parser = require('../middleware/parser')

router.post('/send-email', parser, emailCtrl.sendEmail)

module.exports = router