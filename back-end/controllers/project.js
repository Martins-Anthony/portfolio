const Project = require('../models/Project')

exports.createProject = (req, res, next) => {
  delete req.body._id
  const project = new Project({
    ...req.body
  })
  project
    .save()
    .then(() => {
      res.status(201).json({ message: 'Project saved successfully' })
    })
    .catch((error) => res.status(400).json({ error }))
}

exports.modifyProject = (req, res, next) => {
  Project.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Project updated successfully' }))
    .catch((error) => res.status(400).json({ error }))
}

exports.deleteProject = (req, res, next) => {
  Project.deleteOne({ _id: req.params.id })
   .then(() => res.status(200).json({ message: 'Project deleted successfully' }))
   .catch((error) => res.status(400).json({ error }))
}

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