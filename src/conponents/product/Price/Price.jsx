import style from './Price.module.css'
import React from 'react'

function Price(props) {
  return ( <p className={style.priceWrapper}>
    <span className={style.sign}>
      {props.priceSign}
    </span>
    <span className={style.value}>
      {props.priceValue}
    </span>
  </p>)
}

export default Price;