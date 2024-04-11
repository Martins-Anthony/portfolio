const Project = require('../models/Project')

module.exports = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id })
    if (!project || project.userId != req.auth.userId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    next()
  } catch (error) {
    res.status(400).json({ error })
  }
}
