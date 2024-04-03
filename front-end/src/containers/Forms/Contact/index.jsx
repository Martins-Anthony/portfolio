import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Field, { FIELD_TYPES } from '../../../components/Field'
import SocialMediaIcons from '../../../components/SocialMediaIcons'
import { sendMessage } from './contactSlice'
import { openModal } from '../../Modal/modalSlice'
import { selectEmailMessage, selectModal } from '../../../App/store/selectors'
import ReCAPTCHA from 'react-google-recaptcha'
import Modal from '../../Modal'

function Contact() {
  const reCaptchaRef = useRef()
  const form = useRef()
  const dispatch = useDispatch()
  const emailMessage = useSelector(selectEmailMessage)
  const { typeModal } = useSelector(selectModal)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = await reCaptchaRef.current.executeAsync()

    const formData = new FormData()
    formData.append('token', token)
    formData.append('name', event.target.name.value)
    formData.append('email', event.target.email.value)
    formData.append('message', event.target.message.value)
    const headers = { 'Content-Type': `multipart/form-data; boundary=${formData._boundary}` }
    dispatch(sendMessage({ formData, headers }))
    reCaptchaRef.current.reset()
    form.current.reset()
  }

  useEffect(() => {
    if (emailMessage) {
      dispatch(openModal('emailConfirmation'))
    }
  }, [emailMessage, dispatch])

  return (
    <section className="contact-container" id="contact">
      <form ref={form} onSubmit={handleSubmit} className="form-container">
        <legend>Envoyez-moi un message</legend>
        <div className="form-container_text">
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Nom :"
            name="name"
            placeholder="Écrivez votre name"
          />
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Email :"
            name="email"
            placeholder="Écrivez votre email"
          />
        </div>
        <Field
          type={FIELD_TYPES.TEXTAREA}
          label="Message :"
          name="message"
          placeholder="Écrivez votre message"
        />
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reCaptchaRef}
        />
        <button className=" submit-style btn">Envoyer</button>
      </form>
      {typeModal === 'emailConfirmation' ? (
        <Modal children={emailMessage} typeModal={'emailConfirmation'} />
      ) : null}
      <SocialMediaIcons />
    </section>
  )
}

export default Contact
