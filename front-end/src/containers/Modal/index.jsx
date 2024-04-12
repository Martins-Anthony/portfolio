import { useSelector, useDispatch } from 'react-redux'
import { selectModal } from '../../App/store/selectors'
import { closeModal } from './modalSlice'
import { resetMessage } from '../Forms/Contact/contactSlice'
import { useRef, useEffect, useCallback } from 'react'

const Modal = ({ children }) => {
  const { isOpen, typeModal } = useSelector(selectModal)
  const dispatch = useDispatch()
  const modalRef = useRef()

  const handleClose = useCallback(
    (event) => {
      if (event) {
        event.preventDefault()
      }
      dispatch(closeModal())
      dispatch(resetMessage())
    },
    [dispatch]
  )

  const handleOutsideClick = useCallback(
    (event) => {
      if (event && modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose()
      }
    },
    [handleClose]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  if (!isOpen) return null

  let modalContent = null

  switch (typeModal) {
    case 'modalMenuBurger':
      modalContent = <ul className="modal-menu-burger">{children}</ul>
      break
    case 'modalConfirmation':
      modalContent = (
        <div ref={modalRef} className="modal-email-confirmation">
          <span className="close-modal" onClick={handleClose}>
            &times;
          </span>
          <div className="container-children">{children}</div>
        </div>
      )
      break
    default:
      modalContent = null
      break
  }

  return <div className="modal-style"> {modalContent} </div>
}

export default Modal
