import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/simpsons';

const initialState = {
  quote: '',
  characterName: '',
  characterImage: '', 
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return { ...state, 
        quote: payload.quote, 
        characterName: payload.characterName, 
        characterImage: payload.characterImage, 
        loading: false 
      };
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
