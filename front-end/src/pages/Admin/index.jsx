import { useSelector } from 'react-redux'
import { selectIsSignedIn } from '../../App/store/selectors'
import Add from '../../containers/Forms/Add'
import SignIn from '../../containers/Forms/Connection/SignIn'

function Admin() {
  const connection = useSelector(selectIsSignedIn)
  return <section className="section">{!connection ? <SignIn /> : <Add />}</section>
}

export default Admin
