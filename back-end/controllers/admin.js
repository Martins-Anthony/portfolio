require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Admin = require('../models/Admin')

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const admin = new Admin({
        email: req.body.email,
        password: hash
      })
      admin
        .save()
        .then(() => {
          res.status(201).json({ message: 'Admin saved successfully' })
        })
        .catch((error) => res.status(400).json({ error }))
    })
    .catch((error) => res.status(500).json({ error }))
}

exports.login = (req, res, next) => {
  Admin.findOne({ email: req.body.email })
    .then((admin) => {
      if (admin === null) {
        res.status(401).json({ error: 'incorrect username/password pair' })
      } else {
        bcrypt
          .compare(req.body.password, admin.password)
          .then((valid) => {
            if (!valid) {
              res.status(401).json({ error: 'incorrect username/password pair' })
            } else {
              res.status(200).json({
                userId: admin._id,
                token: jwt.sign({ userId: admin._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
              })
            }
          })
          .catch((error) => res.status(500).json({ error }))
      }
    })
    .catch((error) => res.status(500).json({ error }))
}