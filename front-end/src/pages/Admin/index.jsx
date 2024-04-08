import { useSelector } from 'react-redux'
import { selectIsSignedIn } from '../../App/store/selectors'
import Add from '../../containers/Forms/PostProject'
import SignIn from '../../containers/Forms/Connection/SignIn'

function Admin() {
  const connection = useSelector(selectIsSignedIn)
  return <section className="section large-height">{!connection ? <SignIn /> : <Add />}</section>
}

export default Admin
