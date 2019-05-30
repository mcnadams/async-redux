import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING, FETCH_CHARACTER_ERROR } from '../actions/characterActions';

const initialState = {
  character: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER:
      return { ...initialState, character: action.payload, loading: false };
    case FETCH_CHARACTER_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

