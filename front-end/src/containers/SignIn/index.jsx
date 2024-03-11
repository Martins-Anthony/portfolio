import Field, { FIELD_TYPES } from '../../components/Field'
function SignIn() {
  return (
    <form onSubmit={''} className="form-container">
      <legend>Admin</legend>
      <div className="form-container_text">
        <Field
          type={FIELD_TYPES.INPUT_TEXT}
          label="Email :"
          name="email"
          placeholder="Enter email"
        />
        <Field
          type={FIELD_TYPES.INPUT_PASSWORD}
          label="Password :"
          name="password"
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="submit-style btn">
        SignIn
      </button>
    </form>
  )
}

export default SignIn
