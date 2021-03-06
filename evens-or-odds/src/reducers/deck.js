
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
  cards:[],
  isFetchingCard: false
}


const deckReducer = (state = DEFAULT_DECK, action) => {
  switch (action.type) {
    case DRAW_CARD_REQUEST:
      return {
        ...state,
        isFetchingCard: true
      }
    case DRAW_CARD_SUCCESS:

      return {  ...state,remaining: action.remaining, cards: action.cards, fetchState: success, message:null, isFetchingCard: false};
    case DRAW_CARD_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: error,
        isFetchingCard: false
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
