const express = require('express')
const auth = require('../middleware/auth')
const rateLimit = require('../middleware/rateLimit')
const multer = require('../middleware/multer-config')
const projectCtrl = require('../controllers/edit')
const checkProjectOwnership = require('../middleware/checkProjectOwnership')
const checkRoute = require('../middleware/checkRoute')

const router = express.Router()

router.post('/', rateLimit, auth, multer, checkRoute, projectCtrl.createProject)
router.put('/:id', rateLimit, auth, multer, checkProjectOwnership, checkRoute, projectCtrl.modifyProject)
router.delete('/:id', rateLimit, auth, projectCtrl.deleteProject)

module.exports = router
