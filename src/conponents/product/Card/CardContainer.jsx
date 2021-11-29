import {connect} from 'react-redux'
import {showModalAC, setContentAC} from '../../../store/redusers/modal-reduser'
import Card from './Card'


function mapStateToProps(state, props) {
  return {
    category: props.category,
    name: props.name,
    priceSign: props.priceSign,
    priceValue: props.priceValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: () => {
      const action = showModalAC();
      dispatch(action); // call a function that will update state
    },
    setContent: (product) => {
      const action = setContentAC(product);
      dispatch(action); // call a function that will update state
    },
  }
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;