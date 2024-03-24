require('dotenv').config()
const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST_EMAIL,
      port: process.env.PORT_EMAIL,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_KEY
      }
    })

    let mailOptions = {
      from: email,
      to: process.env.EMAIL_ADDRESS,
      subject: 'subject site',
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json('E-mail envoyé !')
  } catch (error) {
    res.status(500).json("Une erreur s'est produite lors de l'envoi de l'e-mail, veuillez réessayer.")
  }
}

module.exports = { sendEmail }
