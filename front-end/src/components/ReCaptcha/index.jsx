import React, { useEffect } from 'react'

const ReCaptcha = ({ onVerify }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true

    const head = document.head
    const title = head.querySelector('title')
    head.insertBefore(script, title)

    window.recaptchaCallback = function (token) {
      if (token) {
        onVerify(token)
      } else {
        console.error('Erreur lors du chargement du reCAPTCHA')
      }
    }

    return () => {
      head.removeChild(script)
      delete window.recaptchaCallback
    }
  }, [onVerify])

  return (
    <div
      className="g-recaptcha"
      data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      data-callback="recaptchaCallback"
      data-size="invisible"></div>
  )
}

export default ReCaptcha
