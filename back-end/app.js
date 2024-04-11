require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const projectRoutes = require('./routes/project')
const adminRoutes = require('./routes/admin')
const editRoutes = require('./routes/edit')
const emailRoutes = require('./routes/email')

const basePath = '/api/'
const version = 'v1'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose
  .connect(
    `mongodb+srv://${process.env.USER_DATABASE}:${process.env.DATABASE_KEY}@${process.env.CLUSTER_DATABASE}.hot0hr3.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

app.use(`${basePath}+${version}/admin`, adminRoutes)
app.use(`${basePath}+${version}/projects`, projectRoutes)
app.use(`${basePath}+${version}/admin/edit`, editRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(basePath + version, emailRoutes)

module.exports = app
