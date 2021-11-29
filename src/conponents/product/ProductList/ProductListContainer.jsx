import {connect} from 'react-redux'
import {setCardsAC, getCheapestAC} from '../../../store/redusers/cards-reduser'
import ProductList from './ProductList'


function mapStateToProps(state) {
  return {
    cards: state.productCards.cards, // state array with cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCards: (cards) => {
      const action = setCardsAC(cards);
      dispatch(action) // call a function that will update state
    },
    getCheapest: () => {
      const action = getCheapestAC();
      dispatch(action)
    },
  }
}

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductListContainer;