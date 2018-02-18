import { AsyncStorage } from 'react-native';

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const DECK_STORAGE_KEY = '@UdaciCards:decks-2';

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    if (results == null) {
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData));

      return dummyData;
    }

    console.log(JSON.parse(results))
    return JSON.parse(results);
  });
}

export function addDeck(deck) {
  return fetchDecks().then(results => {
    results[deck.title] = deck;

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(results));
  });
}

export function addCard(deck, card) {
  return fetchDecks().then(results => {

    const newDeck = { ...deck, questions: [...deck.questions, card] };

    results[deck.title] = newDeck;

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(results));
  });
}
