import { useSelector } from 'react-redux'
import { selectIsSignedIn } from '../../App/store/selectors'
import SignIn from '../../containers/Forms/Connection/SignIn'
import Menu from '../../containers/Menu'

function Admin() {
  const connection = useSelector(selectIsSignedIn)
  return <section className="section large-height">{!connection ? <SignIn /> : <Menu />}</section>
}

export default Admin
