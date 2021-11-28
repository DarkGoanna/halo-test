import style from './Shop.module.css'
import React from 'react'
import Button from '../common/Button/Button'
import ProductList from '../product/ProductList/ProductListContainer'

function Shop(props) {

  function buyCheapest() {
    props.setContent(props.state.cheapest);
    props.showModal();
  }
  
  return (
    <section className={style.shop}>
      <ProductList/>
      <Button type={'button'} value={'Buy cheapest'} callback={buyCheapest}/>
    </section>
  )
}

export default Shop;