export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

import * as API from '../utils/api';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export const addDeck = deck => dispatch =>
  API.addDeck(deck).then(() => {
    dispatch({
      type: ADD_DECK,
      deck,
    });
  });

export const addCard = (deck, card) => dispatch =>
  API.addCard(deck, card).then(() => {
    dispatch({
      type: ADD_CARD,
      deck,
      card,
    });
  });
