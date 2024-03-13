const bodyParser = require('body-parser')

module.exports = (req, res, next) => {
  bodyParser.urlencoded({ extended: false })(req, res, () => {
    bodyParser.json()(req, res, next)
  })
}

