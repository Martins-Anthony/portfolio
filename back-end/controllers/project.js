const Project = require('../models/Project')

exports.getOneProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(404).json({ error }))
}

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }))
}