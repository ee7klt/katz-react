import {DECK} from './types';
const {FETCH_SUCCESS,FETCH_ERROR, FETCH_REQUEST} = DECK
import {startGame} from '../actions/settings';


 const fetchDeckSuccess = deckJson => {
   console.log('fetch deck success')
  const {remaining, deck_id} = deckJson;
  return {remaining, deck_id, isFetching: false, type: FETCH_SUCCESS};
}

const fetchDeckError = error => {
  return {message:error.message, isFetching: false, type: FETCH_ERROR};
}

const fetchDeckRequest = () => {
  return {isFetching: true, type: FETCH_REQUEST}
}

export const fetchNewDeck =  () => dispatch  => {
  dispatch(fetchDeckRequest())
  return  fetch('http://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json() )
  .then(json => dispatch(fetchDeckSuccess(json)))
  .then(x => dispatch(startGame()))
  .catch(error => dispatch(fetchDeckError(error)))
}
