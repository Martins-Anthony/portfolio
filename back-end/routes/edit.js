const express = require('express')
const auth = require('../middleware/auth')
const rateLimit = require('../middleware/rateLimit')
const multer = require('../middleware/multer-config')
const projectCtrl = require('../controllers/edit')

const router = express.Router()

router.post('/',rateLimit, auth, multer, projectCtrl.createProject)
router.put('/:id',rateLimit, auth, multer, projectCtrl.modifyProject)
router.delete('/:id',rateLimit, auth, projectCtrl.deleteProject)

module.exports = router