import { FETCH_CHARACTERS, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

const initialState = {
  loading: false,
  characters: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, error: null, loading: false, characters: action.payload };
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}
