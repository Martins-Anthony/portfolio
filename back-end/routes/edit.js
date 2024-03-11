const express = require('express')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')
const projectCtrl = require('../controllers/edit')

const router = express.Router()

router.post('/', auth, multer, projectCtrl.createProject)
router.put('/:id', auth, multer, projectCtrl.modifyProject)
router.delete('/:id', auth, projectCtrl.deleteProject)

module.exports = router