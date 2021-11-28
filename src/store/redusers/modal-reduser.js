const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const SET_CONTENT = 'SET_CONTENT';

const initialState = {
  isActive: false,
  content: {},
};

function modalReduser(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isActive: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isActive: false,
        content: {},
      };
    case SET_CONTENT:
      return {
        ...state,
        content: { ...action.content }
      };
  }
  return state;
}

export function showModalAC() {
  return { type: SHOW_MODAL };
}

export function hideModalAC() {
  return { type: HIDE_MODAL };
}

export function setContentAC(content) {
  return { type: SET_CONTENT, content };
}

export default modalReduser;