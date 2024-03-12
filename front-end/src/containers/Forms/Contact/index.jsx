import Field, { FIELD_TYPES } from '../../../components/Field'
import SocialMediaIcons from '../../../components/SocialMediaIcons'
function Contact() {
  return (
    <section className="contact-container" id="contact">
      <form onSubmit={''} className="form-container">
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
