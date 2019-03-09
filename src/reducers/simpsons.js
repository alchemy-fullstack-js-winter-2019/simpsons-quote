import { FETCH_QUOTES } from '../actions/simpsons';

const initialState = {
  quotes: [],
  
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTES:
      return { ...state, quotes: payload };
    default:
      return state;
  }
}
