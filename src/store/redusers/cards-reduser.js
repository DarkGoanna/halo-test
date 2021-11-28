const SET_CARDS = 'SET_CARDS';
const GET_CHEAPEST = 'GET_CHEAPEST';

const initialState = {
  cards: [],
  cheapest: {},
};

function cardsReduser(state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: [...action.cards],
      };
    case GET_CHEAPEST:
      return {
        ...state,
        cheapest: state.cards.reduce((previous, current) => previous.price < current.price ? previous : current),
      };
  }
  return state;
}

export function setCardsAC(cards) {
  return { type: SET_CARDS, cards };
}

export function getCheapestAC() {
  return { type: GET_CHEAPEST }
}

export default cardsReduser;