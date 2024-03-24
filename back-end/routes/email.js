const express = require('express')
const router = express.Router()
const emailCtrl = require('../controllers/email')
const rateLimit = require('../middleware/rateLimit')
const validateHuman = require('../middleware/validateHuman')

const multer = require('multer')
const upload = multer({none: true})

router.post('/send-email', upload.none(), validateHuman, emailCtrl.sendEmail)

module.exports = router