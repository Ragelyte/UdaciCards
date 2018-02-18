import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions/types';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...{
          [action.deck.title]: action.deck,
        },
      };
    case ADD_CARD:
      return {
        ...state,
        ...{
          [action.deck.title]: {
            title: action.deck.title,
            questions: [...action.deck.questions, ...[action.card]],
          },
        },
      };
    default:
      return state;
  }
}

export default decks;
