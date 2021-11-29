import style from './ProductList.module.css'

import React,{useEffect} from 'react'
import * as axios from 'axios'
import CardContainer from '../Card/CardContainer'

function ProductList(props) {

  // request to server
  useEffect(() => {
    if (props.cards.length === 0) {
      const requestURL = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';
      axios.get(requestURL)
        .then(response => {
          props.setCards(response.data);
          props.getCheapest();
        },[]);
    }
  });

  // get state array and make components
  const cards = props.cards.map((product, i) => <CardContainer 
    category={product.category}
    name={product.name}
    priceSign={'$'}
    priceValue={product.price}
    key={i}
  />)

  return (
    <div className={style.cardWrapper}>
      {cards} 
    </div>
  )
}

export default ProductList;