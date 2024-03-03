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

  const itemsModal = links.map((link, index) => {
    return (
      <li key={index} className="navbar-mobile-container">
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
      {!isOpen && <img src={menuBurger} alt={'Menu'} onClick={openModal} />}
      <Modal children={itemsModal} isOpen={isOpen} onClose={closeModal}></Modal>
    </>
  )
}

export default Navbar
