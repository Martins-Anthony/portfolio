const Project = require('../models/Project')
const fs = require('fs')

exports.createProject = (req, res, next) => {
  const projectObject = req.body
  const tagArray = JSON.parse(projectObject.tags)
  delete projectObject._id
  delete projectObject._userId
  delete projectObject.tags

  const project = new Project({
    ...projectObject,
    tags: tagArray,
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

exports.modifyProject = async (req, res, next) => {
  try {
    let projectObject = {}
    if (req.file) {
      projectObject = {
        ...JSON.parse(req.body.project),
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      }
    } else {
      projectObject = {
        ...req.body
      }
    }
    const tagArray = JSON.parse(projectObject.tags)
    delete projectObject.tags
    delete projectObject._id
    projectObject.tags = tagArray

    const project = await Project.findOne({ _id: req.params.id })
    if (!project || project.userId != req.auth.userId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    await Project.updateOne({ _id: req.params.id }, { ...projectObject, _id: req.params.id })
    res.status(200).json({ message: 'Project updated successfully' })
  } catch (error) {
    res.status(400).json({ error })
  }
}

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({ _id: req.params.id })
    if (!project || project.userId !== req.auth.userId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    await Project.deleteOne({ _id: req.params.id })
    res.status(200).json({ message: 'Project deleted successfully' })
  } catch (error) {
    res.status(400).json({ error })
  }
}
