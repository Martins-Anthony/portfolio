const express = require('express')
const router = express.Router()

const projectCtrl = require('../controllers/project')

router.get('/:id', projectCtrl.getOneProject)
router.get('/', projectCtrl.getAllProjects)

module.exports = router
