const express = require('express')
const router = express.Router()
const emailCtrl = require('../controllers/email')
const rateLimit = require('../middleware/rateLimit')
const validateHuman = require('../middleware/validateHuman')
const checkRoute = require('../middleware/checkRoute')

const multer = require('multer')
const upload = multer({none: true})

router.post('/send-email',rateLimit, upload.none(), validateHuman, emailCtrl.sendEmail)

module.exports = router