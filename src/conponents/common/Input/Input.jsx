import style from './Input.module.css'
import React from 'react'

function Input(props) {

  const newText = React.createRef();

  function writeText() {
    const text = newText.current.value;
    props.setValue(props.name, text);
  }

  function checkValue() {
    const text = newText.current.value;
    props.checkValue(props.name, text);
  }
  
  let isValid = '';
  if (props.state.fields[props.name].isValid === true) {
    isValid = style.valid;
  } else if (props.state.fields[props.name].isValid === false) {
    isValid = style.notValid;
  }

  return (
    <div className={`${style.container} ${isValid}`}>
      <div className={`${style.inputWrapper} ${isValid}`}>
        <input 
          ref={newText} 
          name={props.name}
          type={props.type} 
          placeholder={props.placeholder}
          className={`${style.input} ${isValid}`}
          value={props.state.fields[props.name].value}
          onChange={writeText}
          onBlur={checkValue}
        />
      </div>
      <p className={style.massage}>{props.state.fields[props.name].massage}</p>
    </div>
  )
}

export default Input;