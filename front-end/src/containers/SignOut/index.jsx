import { useDispatch } from 'react-redux'
import { signOut } from '../SignIn/signInSlice'
function SignOut() {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(signOut())
    sessionStorage.clear()
    console.log('test click', sessionStorage)
  }
  return (
    <button onClick={handleClick} className="submit-style btn">
      Sign Out
    </button>
  )
}

export default SignOut
