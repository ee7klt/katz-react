import {FETCH_DECK_RESULT} from './types';

export const fetchDeckResult = deckJson => {
  const {remaining, deck_id} = deckJson;
  return {remaining, deck_id, type: FETCH_DECK_RESULT};
}
