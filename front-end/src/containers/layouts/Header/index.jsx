import PropTypes from 'prop-types'
import menuBurger from '../../../assets/icons/icon_menu_burger.svg'

function Header({ title }) {
  return (
    <header className="header-container">
      <div className="header-style">{title}</div>
      <img src={menuBurger} alt="Menu"></img>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
