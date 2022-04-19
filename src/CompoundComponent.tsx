import { useCallback, useState } from "react"

const Modal = ({ color }: { color: string }) => {
  return <div style={{ color }}>Modal</div>
}

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = useCallback(() => setIsOpen(true), [setIsOpen])

  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen])

  return {
    Modal,
    modalProps: {
      color: isOpen ? "red" : "blue",
    },
    isOpen,
    openModal,
    closeModal,
  }
}

const CompoundComponent = () => {
  const { Modal, modalProps, isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      {isOpen && <button onClick={closeModal}>Close</button>}
      {!isOpen && <button onClick={openModal}>Open</button>}
      <Modal {...modalProps} />
    </div>
  )
}

export default CompoundComponent
