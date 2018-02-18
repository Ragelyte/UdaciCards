import * as API from '../utils/api';
import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from './types';

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
