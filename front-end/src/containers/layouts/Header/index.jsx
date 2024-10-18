import Navbar from '../../Navbar'
import Logo from '../../../components/Logo'

function Header() {
  return (
    <header className="header-container" id="header">
      <Logo name="header" />
      <Navbar />
    </header>
  )
}

export default Header
