import getCharacters from '../services/lastAirbenderApi';
import { getCharacter } from '../services/lastAirbenderApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  pendingType: FETCH_CHARACTERS_LOADING,
  rejectedType: FETCH_CHARACTERS_ERROR,
  payload: getCharacters()
});

export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTER_LOADING';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  pendingType: FETCH_CHARACTER_LOADING,
  rejectedType: FETCH_CHARACTER_ERROR,
  payload: getCharacter(id)
});
