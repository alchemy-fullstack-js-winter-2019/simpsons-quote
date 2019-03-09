import { FETCH_QUOTE, fetchQuote } from './simpsons';
import { getQuote } from '../services/simpsonsApi';

jest.mock('../services/simpsonsApi');

describe('actions test', () => {
  it('fetches a quote', () => {
    const action = fetchQuote();

    expect(action).toEqual({ 
      type: FETCH_QUOTE,
      loadStart: 'FETCH_QUOTE_LOADING',
      payload:  getQuote()
    });
  });
});
