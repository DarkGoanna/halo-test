const SET_VALUE = 'SET_VALUE';
const CHECK = 'CHECK';
const CHECK_FORM = 'CHECK_FORM';
const CLER_FORM = 'CLER_FORM';

const initialState = {
  fields: {
    name: {
      value: '',
      type: 'string',
      isRequered: true,
      isValid: null,
      massage: '',
      errors: {
        wrongType: 'Only letters allowed',
        thisRequired: 'This field is required',
      }
    },
    phoneNumber: {
      value: '',
      length: 12,
      type: 'number',
      isRequered: true,
      isValid: null,
      massage: '',
      errors: {
        wrongType: 'Only numbers allowed',
        wrongLength: 'Should contain 12 characters',
        thisRequired: 'This field is required',
      }
    },
  },
  isValid: null,
}

function formReduser(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE: {
      const currentField = state.fields[action.fieldName];
      if (currentField.value !== action.text) {
        return {
          ...state, // копируем state
          fields: {
            ...state.fields, // копируем все поля
            [action.fieldName]: {
              ...state.fields[action.fieldName], // копруем все из обьекта с соответствующим именем
              errors: { ...state.fields[action.fieldName].errors }, // копируем все соощения с ошибками
              value: action.text, // текст который печатается в поле
              isValid: null, // при вводе текста сбрасываем стейт у поля
            },
          },
          isValid: null, // при вводе текста сбрасываем стейт у формы
        }
      }
    }
    case CHECK: {
      const currentField = state.fields[action.fieldName];
      const type = isNaN(+action.text) ? 'string' : 'number';
      const hasLength = state.fields[action.fieldName]?.length;
      const error = state.fields[action.fieldName].errors;
      let massage;

      if ((action.text === '')
        || (currentField.type !== type)
        || (hasLength && hasLength !== action.text.length)) {

        // сообщение об ошибке
        if (action.text === '') {
          massage = error.thisRequired;
        } else if (currentField.type !== type) {
          massage = error.wrongType;
        } else if (hasLength && hasLength !== action.text.length) {
          massage = error.wrongLength;
        } else {
          massage = '';
        }

        // обновляем state
        return {
          ...state, // копируем state
          fields: {
            ...state.fields, // копируем все поля
            [action.fieldName]: {
              ...state.fields[action.fieldName], // копруем все из обьекта с соответствующим именем
              errors: { ...state.fields[action.fieldName].errors }, // копируем все соощения с ошибками
              isValid: false, // значение у соответствующего поля
              massage: massage,
            },
          },
          isValid: false, // значение у формы
        }
      } else {
        return {
          ...state, // копируем state
          fields: {
            ...state.fields, // копируем все поля
            [action.fieldName]: {
              ...state.fields[action.fieldName], // копруем все из обьекта с соответствующим именем
              errors: { ...state.fields[action.fieldName].errors }, // копируем все соощения с ошибками
              isValid: true, // значение у соответствующего поля
              massage: '',
            },
          }
        }
      }
    }
    case CHECK_FORM: {
      const fields = {}; // копия обьекта с полями
      let hasNotValidFields;

      for (const key in state.fields) {
        fields[key] = { // создаем в копии - ключ (название поля)
          ...state.fields[key], // копируем всё содержимое, обьект errors пусть копируется по ссылки
        }

        if (!state.fields[key].isValid) { // если null или false
          hasNotValidFields = true;
          fields[key].massage = state.fields[key].errors.thisRequired; // передаем сообщение о пустых полях
          fields[key].isValid = false; // меняем значение  у поля
        }
      }

      if (hasNotValidFields) {
        return {
          ...state,
          fields: { ...fields }, // обновляем поля
          isValid: false, // значение у формы
        }
      } else {
        return {
          ...state,
          isValid: true, // значение у формы
        }
      }
    }
    case CLER_FORM: {
      let clearFields = {}; // копия обьекта с полями

      for (const key in state.fields) {
        clearFields[key] = { // создаем в копии - ключ (название поля)
          ...state.fields[key], // копируем всё содержимое, обьект errors пусть копируется по ссылки
          value: '', // меняем значение у поля
          massage: '', // меняем значение  у поля
          isValid: null, // меняем значение  у поля
        }
      }

      return {
        ...state, // копируем state
        fields: { ...clearFields }, // копия обьяекта с полями
        isValid: false, // значение у формы
      }
    }
  }
  return state;
}

export function setValueAC(fieldName, text) {
  return { type: SET_VALUE, fieldName, text };
}

export function checkValueAC(fieldName, text) {
  return { type: CHECK, fieldName, text };
}

export function checkFormAC() {
  return { type: CHECK_FORM };
}

export function clearFormAC() {
  return { type: CLER_FORM };
}

export default formReduser;
