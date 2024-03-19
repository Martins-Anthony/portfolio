import menuBurger from '../../assets/icons/icon_menu_burger.svg'
import Modal from '../Modal/index.jsx'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import React from 'react'
import { scrollToSection } from '../../utils/scrollToSection'
import { selectIsSignedIn } from '../../App/store/selectors'
import { useSelector } from 'react-redux'
import SignOut from '../Forms/Connection/SignOut'
function Navbar() {
  const signOut = useSelector(selectIsSignedIn)
  const location = useLocation()
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/#projects' },
    { name: 'Contact', link: '#contact' }
  ]

  const handlerClick = (sectionId) => {
    if (isOpen === true) {
      closeModal()
    }
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  }

  const itemsNavbar = links.map((link, index) => {
    const isActive = location.pathname === link.link
    if (link.name === 'Home' && isActive) {
      return null
    }
    if (link.name === 'About' && isActive) {
      return null
    }
    return (
      <li key={index} className="navbar-container">
        <NavLink
          to={link.link}
          onClick={() => {
            handlerClick(link.name.toLowerCase())
          }}
          className={'btn'}
          aria-current={link.name}>
          {link.name}
        </NavLink>
      </li>
    )
  })

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <nav>
      {!isOpen && <img src={menuBurger} alt={'Menu'} onClick={openModal} className="menu-burger" />}
      <Modal
        children={<ul className="modal-content">{itemsNavbar}</ul>}
        isOpen={isOpen}
        onClose={closeModal}></Modal>
      <ul className="navbar">
        {itemsNavbar}
        {signOut ? <SignOut /> : null}
      </ul>
    </nav>
  )
}

export default Navbar
