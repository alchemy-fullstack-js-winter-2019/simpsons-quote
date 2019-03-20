import reducer from './simpsons';	
import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../actions/simpsons';
 
describe('simpsons reducer', () => {
  let state;
  
  beforeEach(() => {
    state = {
      quote: '',
      character: '',
      image: '',
      loading: false
    };
  });

  it('can handle the fetch quote action', () => {
    const fetchedQuote = reducer(state, {
      type: FETCH_QUOTE,
      payload: [{
        quote: 'Can/t we have one meeting that doesn/t end with us digging up a corpse?',
        character:'Mayor Quimby',
        image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
        loading: false
      }]
    });
	
    expect(fetchedQuote).toEqual({
      ...state,
      quote: 'Can/t we have one meeting that doesn/t end with us digging up a corpse?',
      character:'Mayor Quimby',
      image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
      loading: false
    });
  });

  it('can handle the fetch quote loading action', () => {
    const fetchedQuoteLoading = reducer(state, {
      type: FETCH_QUOTE_LOADING,
      payload: {
        quote: 'Can/t we have one meeting that doesn/t end with us digging up a corpse?',
        character:'Mayor Quimby',
        image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
        characterDirection:'Left',
        loading: true
      }
    });
	
    expect(fetchedQuoteLoading).toEqual({
      ...state,
      loading: true
    });
  });
});
