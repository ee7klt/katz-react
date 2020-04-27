
import {DECK} from '../actions/types';

import fetchStates from './fetchStates';


const {FETCH_SUCCESS,FETCH_ERROR, FETCH_REQUEST} = DECK;
const {success, error} = fetchStates;

const DEFAULT_DECK = {
  deck_id: '',
  remaining: 0,
  isFetching: false,
  fetchState: '',
  message:''
}


const deckReducer = (state = DEFAULT_DECK, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FETCH_SUCCESS:
      const {remaining, deck_id} = action;
      return {  ...state,  remaining,deck_id, fetchState: success, message:null, isFetching: false};
    case FETCH_ERROR:
      return {  ...state,  message: action.message, fetchState: error, isFetching: false};
    default:
      return state;
  }
}

export default deckReducer;
