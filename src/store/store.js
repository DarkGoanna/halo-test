import { combineReducers, createStore } from 'redux';
import cardsReduser from './redusers/cards-reduser'
import formReduser from './redusers/form-reduser';
import modalReduser from './redusers/modal-reduser';

const redusers = combineReducers({
  productCards: cardsReduser,
  modal: modalReduser,
  form: formReduser,
})

const store = createStore(redusers);

window.store = store;

export default store;