import PropTypes from 'prop-types'

function Footer({ title }) {
  const date = new Date()
  return (
    <footer className="footer-container">
      <p>
        © {date.getFullYear()} {title}. All rights reserved
      </p>
    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string.isRequired
}

export default Footer
