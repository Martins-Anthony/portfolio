import menuBurger from '../../assets/icons/icon_menu_burger.svg'
import Modal from '../Modal/index.jsx'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { scrollToSection } from '../../utils/scrollToSection'
function Navbar() {
  const [activeLink, setActiveLink] = useState(null)

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' }
  ]

  const handleNavLinkClick = (sectionId) => {
    scrollToSection(sectionId)
    setActiveLink(sectionId)
    console.log(activeLink)
  }

  const itemsNavbar = links.map((link, index) => {
    return (
      <li key={index} className="navbar-container">
        <NavLink
          to={link.link}
          onClick={() => handleNavLinkClick(link.name.toLowerCase())}
          className={'btn'}>
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
      <ul className="navbar">{itemsNavbar}</ul>
    </nav>
  )
}

export default Navbar
