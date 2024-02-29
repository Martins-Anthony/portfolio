import PropTypes from 'prop-types'

function Header({ title }) {
  return (
    <header className="header-container">
      <div className="header-style">{title}</div>
      <i className="fa-solid fa-bars header-icon"></i>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
