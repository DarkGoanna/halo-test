import style from "./Description.module.css";
import React from 'react'

function ProductDescription(props) {
  return (
    <div className={style.description}>

      <p className={style.category}>
        {props.category}
      </p>

      <p className={style.name}>
        {props.name}
      </p>

    </div>
  )
}

export default ProductDescription;