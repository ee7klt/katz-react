
import {
  SET_GAME_STARTED,
  SET_INSTRUCTIONS_EXPANDED,
  DECK
} from '../actions/types';

const {FETCH_SUCCESS,FETCH_ERROR} = DECK;

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
  deck_id: null,
  remaining: null,
  error: null
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
    case FETCH_SUCCESS:
      const {remaining, deck_id} = action;
      return {  ...state,  remaining,deck_id};
    case FETCH_ERROR:
      return {  ...state,  ...action};
    default:
      return state;
  }
}

export default rootReducer;
