import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/simpsons';

const initialState = {
  quote: '',
  character: '',
  image: '',
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: action.payload[0].quote,
        character: action.payload[0].character,
        image: action.payload[0].image,
        loading: false
      };
    case FETCH_QUOTE_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
