import {DECK} from './types';
const {FETCH_SUCCESS,FETCH_ERROR} = DECK


 const fetchDeckSuccess = deckJson => {
   console.log('fetch deck success')
  const {remaining, deck_id} = deckJson;
  return {remaining, deck_id, type: FETCH_SUCCESS};
}

const fetchDeckError = error => {
     console.log('fetch deck error')
  return {message:error.message, type: FETCH_ERROR};
}

export const fetchNewDeck =  dispatch  => {
  return  fetch('http://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(json => dispatch(fetchDeckSuccess(json)))
  .catch(error => dispatch(fetchDeckError(error)))
}
