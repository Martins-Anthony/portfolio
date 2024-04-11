const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  linkGithub: {
    type: String,
    required: true
  },
  linkDemo: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: false
  },
  customer: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Project', projectSchema)
