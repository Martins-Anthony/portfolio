const express = require('express')
const router = express.Router()

const projectCtrl = require('../controllers/project')

router.post('/', projectCtrl.createProject)
router.put('/:id', projectCtrl.modifyProject)
router.delete('/:id', projectCtrl.deleteProject)

module.exports = router
