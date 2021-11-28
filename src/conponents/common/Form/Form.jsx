import style from './Form.module.css'
import React from 'react'
import Input from '../Input/InputContainer'
import Button from '../Button/Button'

function Form(props) {

  function submitForm() {
    if (props.state.isValid) {
      const result = {};

      for(let key in props.state.fields) {
        result[key] = props.state.fields[key].value;
      }

      console.log(result); // отправка
      props.clearForm()
      props.hide()
    } else {
      props.checkForm()
    }
  }

  return (
    <form action="" className={style.form} onSubmit={event => {
      event.preventDefault();
      submitForm();
    }}>
      <div className={style.inputWrapper}>
        <Input name={'name'} type={'text'} placeholder={'Name'}/>
        <Input name={'phoneNumber'} type={'text'} placeholder={'Number'}/>
      </div>

      <Button type={'submit'} value={'Order'}/>
    </form>
  )
}

export default Form;