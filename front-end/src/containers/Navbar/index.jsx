import menuBurger from '../../assets/icons/icon_menu_burger.svg'
import Modal from '../Modal/index.jsx'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'
import { selectIsSignedIn, selectModal } from '../../App/store/selectors'
import { useSelector, useDispatch } from 'react-redux'
import SignOut from '../Forms/Connection/SignOut'
import { openModal, closeModal } from '../Modal/modalSlice'
function Navbar() {
  const signOut = useSelector(selectIsSignedIn)
  const modal = useSelector(selectModal)
  const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const links = [
    { name: 'About', link: '/#about' },
    { name: 'Projets', link: '/#projets' },
    { name: 'Contact', link: '#contact' }
  ]

  const openMenuModal = (event) => {
    event.preventDefault()
    setIsOpenModal(!isOpenModal)
    dispatch(openModal('modalMenuBurger'))
  }

  const handlerClick = (sectionId) => {
    if (modal) {
      dispatch(closeModal())
      setIsOpenModal(false)
    }
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  }

  const itemsNavbar = links.map((link, index) => {
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

  return (
    <nav>
      <img
        src={menuBurger}
        alt={'Menu navigation'}
        onClick={openMenuModal}
        className="menu-burger"
      />
      {isOpenModal ? (
        <Modal children={itemsNavbar} typeModal={'modalMenuBurger'} />
      ) : (
        <ul className="navbar">
          {itemsNavbar}
          {signOut ? <SignOut /> : null}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
