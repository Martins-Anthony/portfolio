import React from 'react'
import Logo from '../../../components/Logo'

function Footer() {
  const date = new Date()
  return (
    <footer className="footer-container">
      <Logo name="footer" />
      <div className="copyright">
        <span>© {date.getFullYear()} </span>
        <Logo />
        <p> All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
