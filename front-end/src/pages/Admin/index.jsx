import { useSelector } from 'react-redux'
import { selectIsSignedIn } from '../../App/store/selectors'
import SignIn from '../../containers/SignIn'
import SignOut from '../../containers/SignOut'

function Admin() {
  const connection = useSelector(selectIsSignedIn)
  return <section className="contact-container">{!connection ? <SignIn /> : <SignOut />}</section>
}

export default Admin
