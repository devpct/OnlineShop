import React, { useContext } from 'react'
import { ModalContainerContext } from '../../../context/signupLogin/FormContext'
import './modalContainer.scss'

function ModalContainer() {
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)


  return (
    <>
    <div style={{display: modalContainer.display}} id='modalContainer'>
      <div style={{color: modalContainer.color , backgroundColor: modalContainer.backgroundColor}} className='modal-content'>
        <i className={modalContainer.icon}></i>
        <p className='paragraf'>
          {modalContainer.description}
        </p>
      </div>
    </div>
    </>
  )
}

export default ModalContainer