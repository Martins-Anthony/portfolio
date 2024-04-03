const express = require('express')
const router = express.Router()
const emailCtrl = require('../controllers/email')
const rateLimit = require('../middleware/rateLimit')
const validateHuman = require('../middleware/validateHuman')
const checkRoute = require('../middleware/checkRoute')

const multer = require('multer')
const upload = multer({none: true})

router.post('/send-email', checkRoute, upload.none(), checkRoute, validateHuman, emailCtrl.sendEmail)

module.exports = router