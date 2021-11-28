import style from './Modal.module.css'
import React from 'react'
import Form from '../Form/FormContainer'
import Price from '../../product/Price/Price' 
import ProductDescription from '../../product/Description/Description' 

function Modal(props) {
  const isActive = props.state.isActive ? `${style.show}` : '';

  function closeModal() {
    props.clearForm()
    props.hide()
  }

  return (
    <div className={`${style.bg} ${isActive}`} onClick={closeModal}>
      <div className={style.modal} onClick={event => event.stopPropagation()}>
        <button type='button' className={style.closeButton} onClick={closeModal}></button>
        
        <div className={style.content}>
          <ProductDescription category={props.state.content.category} name={props.state.content.name}/>
          <Price priceSign={props.priceSign} priceValue={props.state.content.price}/>
        </div>

        <Form hide={props.hide}/>
      </div>
    </div>
  )
}

export default Modal;