import {connect} from 'react-redux'
import {showModalAC, setContentAC} from '../../store/redusers/modal-reduser'
import Shop from './Shop'


function mapStateToProps(state) {
  return {
    state: state.productCards,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setContent: (product) => {
      const action = setContentAC(product);
      dispatch(action);
    },
    showModal: () => {
      const action = showModalAC();
      dispatch(action);
    },
  }
}

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopContainer;