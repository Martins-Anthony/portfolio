const express = require('express')
const mongoose = require('mongoose')

const projectRoutes = require('./routes/project')
const adminRoutes = require('./routes/admin')

const app = express()

mongoose.connect(
  'mongodb+srv://utilisateurWebcractAnthony:EpYRYI8sN4jqt4Nf@cluster0.ux7jm29.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

app.use(express.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

app.use('api/admin/edit/projects', adminRoutes)
app.use('api/projects', projectRoutes)

module.exports = app
