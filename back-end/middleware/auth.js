const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    const userId = decoded.userId
    req.auth = {
      userId: userId
    }
  } catch (error) {
    res.status(401).json({ error })
  }
}