import getCharacters from '../services/lastAirbenderApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
export const fetchCharacters = () => dispatch => {

  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  return getCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_CHARACTERS_ERROR,
        payload: error
      });
    });
};
