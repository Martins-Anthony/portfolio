const multer = require('multer')

const MIME_TYPE = {
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/jpg': 'jpg',
  'image/avif': 'avif',
  'image/webp': 'webp'
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_')
    const extension = MIME_TYPE[file.mimetype]
    callback(null, name + Date.now() + '.' + extension)
  }
})

module.exports = multer({ storage }).single('image')