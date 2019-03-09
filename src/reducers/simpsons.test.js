import reducer from './simpsons';
import { FETCH_QUOTE, FETCH_QUOTE_LOADING } from '../action/simpsons';

describe('Simpsons reducers test', () => {
  it('can fetch quotes from state', () => {
    const state = {
      quote: '',
      characterName: '',
      characterImage: '',
      loading: false	      
    };

    const fetchedState = reducer(state, {
      type: FETCH_QUOTE,
      payload: {
        quote: 'I\'m sleeping in the bath tub.',
        character: 'Marge Simpson',
        image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205'
      }
    });
    expect(fetchedState).toEqual({ 
      quote: 'I\'m sleeping in the bath tub.',
      characterName: 'Marge Simpson',
      characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
      loading: false
    });
  });  

  it('can fetch loading from state', () => {
    const state = {
      quote: 'I\'m sleeping in the bath tub.',
      characterName: 'Marge Simpson',
      characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
      loading: false
    };
    const fetchedLoading = reducer(state, {
      type: FETCH_QUOTE_LOADING,
      payload: {
        quote: 'I\'m sleeping in the bath tub.',
        characterName: 'Marge Simpson',
        characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
        loading: true
      }
    });
    expect(fetchedLoading).toEqual({ 
      quote: 'I\'m sleeping in the bath tub.',
      characterName: 'Marge Simpson',
      characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205',
      loading: true
    });
  });

});
