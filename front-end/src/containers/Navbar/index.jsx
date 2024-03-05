import menuBurger from '../../assets/icons/icon_menu_burger.svg'
import Modal from '../Modal/index.jsx'
import { useState } from 'react'

function Navbar() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About me', link: '/about' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact', link: '#contact' }
  ]

  const itemsNavbar = links.map((link, index) => {
    return (
      <li key={index} className="navbar-container btn">
        <a href={link.link}>{link.name}</a>
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
    <>
      {!isOpen && <img src={menuBurger} alt={'Menu'} onClick={openModal} className="menu-burger" />}
      <Modal
        children={<ul className="modal-content">{itemsNavbar}</ul>}
        isOpen={isOpen}
        onClose={closeModal}></Modal>
      <ul className="navbar">{itemsNavbar}</ul>
    </>
  )
}

export default Navbar
