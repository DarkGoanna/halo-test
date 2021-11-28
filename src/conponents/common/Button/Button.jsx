import style from './Button.module.css'
import React from 'react'

function Button(props) {
  return (
    <button type={props.type} className={style.button} onClick={props.callback}>{props.value}</button>
  )
}

export default Button;