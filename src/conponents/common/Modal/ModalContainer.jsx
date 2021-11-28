import React from 'react'
import {connect} from 'react-redux'
import {hideModalAC} from '../../../store/redusers/modal-reduser'
import {clearFormAC} from '../../../store/redusers/form-reduser'
import Modal from './Modal'



function mapStateToProps(state) {
  return {
    state: state.modal,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hide: () => {
      const action = hideModalAC();
      dispatch(action);
    },
    clearForm: () => {
      const action = clearFormAC();
      dispatch(action);
    },
  }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;