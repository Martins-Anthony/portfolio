const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'votre_email@gmail.com',
        pass: 'votre_mot_de_passe'
      }
    });

    let mailOptions = {
      from: 'votre_email@gmail.com',
      to: 'contact@web.fr',
      subject: subject,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('E-mail envoyé avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
  }
};

module.exports = { sendEmail };