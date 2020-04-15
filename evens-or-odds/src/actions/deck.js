import {FETCH_DECK_RESULT} from './types';

export const fetchDeckResult = deckJson => {
  const {remaining, deck_id} = deckJson;
  return {remaining, deck_id, type: FETCH_DECK_RESULT};
}

export const fetchNewDeck = () => {
  return  fetch('http://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(json => fetchDeckResult(json))
}
