const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null
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
