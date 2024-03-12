const Project = require('../models/Project')
const fs = require('fs')

exports.createProject = (req, res, next) => {
  const projectObject = req.body
  delete projectObject._id
  delete projectObject._userId
  const project = new Project({
    ...projectObject,
    userId: req.auth.userId,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  })
  project
    .save()
    .then(() => {
      res.status(201).json({ message: 'Project saved successfully' })
    })
    .catch((error) => res.status(400).json({ error }))
}

exports.modifyProject = (req, res, next) => {
  const projectObject = req.file
    ? {
        ...JSON.parse(req.body.project),
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
    : { ...req.body }
  delete projectObject._id
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (project.userId != req.auth.userId) {
        res.status(401).json({ error: 'Unauthorized' })
      } else {
        Project.updateOne({ _id: req.params.id }, { ...projectObject, _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Project updated successfully' }))
          .catch((error) => res.status(400).json({ error }))
      }
    })
    .catch((error) => res.status(400).json({ error }))
}

exports.deleteProject = (req, res, next) => {
  Project.findOne({ _id: req.params.id })
    .then((project) => {
      if (project.userId != req.auth.userId) {
        res.status(401).json({ error: 'Unauthorized' })
      } else {
        const filename = project.imagesUrl.split('/images/')[1]
        fs.unlink(`./images/${filename}`, () => {
          Project.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Project deleted successfully' }))
          .catch((error) => res.status(400).json({ error }))
        })
      }
    })
    .catch((error) => res.status(500).json({ error }))
}
