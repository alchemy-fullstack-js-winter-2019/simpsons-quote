import reducer from './simpsons';
import { FETCH_QUOTES } from '../actions/simpsons';

describe('simpsons reducer', () => {
  it('handles a fetch quotes action', () => {
    const state = [{
      quote: '',
      characterName:'',
      characterImg:''
    }];
    const fetchQuotesWithAPromise = reducer(state, [{
      type: FETCH_QUOTES,
      payload: {
        quote: '',
        characterName:'',
        characterImg:''
      }
    }]);
    expect(fetchQuotesWithAPromise).toEqual([{
      quote: '',
      characterName:'',
      characterImg:''
    }]);
  });

});
