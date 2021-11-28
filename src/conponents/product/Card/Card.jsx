import style from "./Card.module.css";
import React from 'react'
import Price from "../Price/Price";
import Button from "../../common/Button/Button";
import ProductDescription from "../Description/Description";

function Card(props) {
  
  function buyThisProduct() {
    const product = {
      category: props.category,
      name: props.name,
      price: props.priceValue,
    }

    props.setContent(product);
    props.showModal();
  }

  return (
    <div className={style.card}>

      <ProductDescription category={props.category} name={props.name}/>
      
      <div className={style.priceWrapper}>
        <Price priceSign={props.priceSign} priceValue={props.priceValue}/>
        <Button type={'button'} value={'buy'} className={style.button} callback={buyThisProduct}/>
      </div>
    </div>
  )
}

export default Card;