import Field, { FIELD_TYPES } from '../../../components/Field'
import SocialMediaIcons from '../../../components/SocialMediaIcons'
function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', event.target.name.value)
    formData.append('email', event.target.email.value)
    formData.append('message', event.target.message.value)
  }
  return (
    <section className="contact-container" id="contact">
      <form onSubmit={handleSubmit} className="form-container">
        <legend>Send me a message</legend>
        <div className="form-container_text">
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Name :"
            name="name"
            placeholder="Enter your name"
          />
          <Field
            type={FIELD_TYPES.INPUT_TEXT}
            label="Email :"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <Field
          type={FIELD_TYPES.TEXTAREA}
          label="Message :"
          name="message"
          placeholder="Enter your message"
        />
        <button type="submit" className="submit-style btn">
          Submit
        </button>
      </form>
      <SocialMediaIcons />
    </section>
  )
}

export default Contact
