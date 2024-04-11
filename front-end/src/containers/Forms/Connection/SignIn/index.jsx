import { useDispatch } from 'react-redux'
import Field, { FIELD_TYPES } from '../../../../components/Field'
import { signIn } from './signInSlice'
function SignIn() {
  const dispatch = useDispatch()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const id = {
      email: event.target.email.value.toLowerCase(),
      password: event.target.password.value
    }
    dispatch(signIn(id))
  }
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <legend>Admin</legend>
      <div className="form-container_text">
        <Field
          type={FIELD_TYPES.INPUT_MAIL}
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
        Sign In
      </button>
    </form>
  )
}

export default SignIn
