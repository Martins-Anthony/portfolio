require('dotenv').config()

const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise')
module.exports = async (req, res, next) => {
  try {
    const { token } = req.body
    
    const projectID = process.env.REACT_APP_RECAPTCHA_PROJECT
    const recaptchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY

    const client = new RecaptchaEnterpriseServiceClient()
    const projectPath = client.projectPath(projectID)
    
    const request = {
      assessment: {
        event: {
          token: token,
          siteKey: recaptchaKey
        }
      },
      parent: projectPath
    }

    const [response] = await client.createAssessment(request)
    if (!response.tokenProperties.valid) {
      return res.status(400).json({ error: 'The reCAPTCHA token is invalid' })
    }

    if (response.tokenProperties.valid) {
      return next()
    }
  } catch (error) {
    console.error('Error during validation reCAPTCHA :', error)
    return res.status(500).json({ error: 'An error occurred during validation reCAPTCHA' })
  }
}
