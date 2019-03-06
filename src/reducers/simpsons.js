const initialState = {
  quote: 'hi',
  character: 'bart',
  image: 'image'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_QUOTE':
      return { ...state, quote: action.payload.quote, character: action.payload.character, image: action.payload.image   };
    default:
      return state;
  }
}
