import { useState } from 'react'
import close from '../../assets/icons/icon_close.svg'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null
  // <img src={close} alt="close" onClick={onClose}></img>
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
