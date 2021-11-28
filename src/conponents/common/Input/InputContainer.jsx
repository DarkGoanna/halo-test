import React from 'react'
import Input from './Input'
import {connect} from 'react-redux'
import {setValueAC, checkValueAC, checkFormAC} from '../../../store/redusers/form-reduser'

function mapStateToProps(state, props) {
  return {
    state: state.form,
    type: props.type,
    name: props.name,
    placeholder: props.placeholder,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setValue: (fieldName, text) => {
      const action = setValueAC(fieldName, text);
      dispatch(action);
    },
    checkValue: (fieldName, text) => {
      const action = checkValueAC(fieldName, text);
      dispatch(action);
    },
    checkForm: () => {
      const action = checkFormAC();
      dispatch(action);
    },
  }
}

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;