const express = require('express')
const router = express.Router()
const emailCtrl = require('../controllers/email')
const rateLimit = require('../middleware/rateLimit')

const multer = require('multer')
const upload = multer({none: true})

router.post('/send-email', rateLimit, upload.none(), emailCtrl.sendEmail)

module.exports = router