
import {DECK} from '../actions/types';

import fetchStates from './fetchStates';


const {FETCH_SUCCESS,FETCH_ERROR, FETCH_REQUEST,DRAW_CARD_REQUEST,DRAW_CARD_ERROR,DRAW_CARD_SUCCESS} = DECK;
const {success, error} = fetchStates;

const DEFAULT_DECK = {
  deck_id: '',
  remaining: 0,
  isFetching: false,
  fetchState: '',
  message:'',
  cards:[]
}


const deckReducer = (state = DEFAULT_DECK, action) => {
  switch (action.type) {
    case DRAW_CARD_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case DRAW_CARD_SUCCESS:
      const {cards} = action;
      return {  ...state, cards, fetchState: success, message:null, isFetching: false};
    case DRAW_CARD_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: error,
        isFetching: false
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
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
