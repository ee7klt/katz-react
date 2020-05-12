import {DECK} from './types';
const {FETCH_SUCCESS,FETCH_ERROR, FETCH_REQUEST, DRAW_CARD_SUCCESS,DRAW_CARD_ERROR, DRAW_CARD_REQUEST} = DECK
import {startGame} from '../actions/settings';
const API_ADDRESS = 'https://deckofcardsapi.com/api/deck'

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


 const drawCardSuccess = ({cards,remaining}) => {
  return {remaining, cards, isFetchingCard: false, type: DRAW_CARD_SUCCESS};
}

const drawCardError = error => {
  return {message:error.message, isFetchingCard: false, type: DRAW_CARD_ERROR};
}


const drawCardRequest = () => {
  return {isFetchingCard: true, type: DRAW_CARD_REQUEST}
}

export const fetchNewDeck =  () => dispatch  => {
  dispatch(fetchDeckRequest())
  return  fetch(`${API_ADDRESS}/new/shuffle/`)
  .then(response => response.json() )
  .then(json => dispatch(fetchDeckSuccess(json)))
  .then(x => dispatch(startGame()))
  .catch(error => dispatch(fetchDeckError(error)))
}

export const drawNewCard =  deck_id => (dispatch)  => {
  dispatch(drawCardRequest())
  return  fetch(`${API_ADDRESS}/${deck_id}/draw/?count=1`)
  .then(response => response.json() )
  .then(json => dispatch(drawCardSuccess(json)))
  .catch(error => dispatch(drawCardError(error)))

}
