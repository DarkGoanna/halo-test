import React from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import {checkFormAC, clearFormAC} from '../../../store/redusers/form-reduser'

function mapStateToProps(state, props) {
  return {
    state: state.form,
    hide: props.hide,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkForm: () => {
      const action = checkFormAC();
      dispatch(action);
    },
    clearForm: () => {
      const action = clearFormAC();
      dispatch(action);
    },
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;