
import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  DECK
} from '../actions/types';

import fetchStates from './fetchStates';


const {FETCH_SUCCESS,FETCH_ERROR, FETCH_REQUEST} = DECK;
const {success, error} = fetchStates;

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
  deck_id: null,
  remaining: null,
  isFetching: false
}






const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_GAME_STARTED:
      return {
        ...state, gameStarted: action.gameStarted
      }
    case SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      }
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

export default rootReducer;
