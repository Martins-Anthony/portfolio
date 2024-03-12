import { useDispatch } from 'react-redux'
import { signOut } from '../SignIn/signInSlice'
function SignOut() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(signOut())
    sessionStorage.clear()
  }
  return (
    <button onClick={handleClick} className="submit-style btn btn-marge">
      Sign Out
    </button>
  )
}

export default SignOut
