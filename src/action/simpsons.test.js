import { FETCH_QUOTE, fetchQuote } from './simpsons';
import { getQuote } from '../services/simpsonsApi';

jest.mock('../services/simpsonsApi');

describe('Action test', () => {
  it('handles fetchQuote action', () => {
    const fetchedAction = fetchQuote();

    expect(fetchedAction).toEqual({ 
      type: FETCH_QUOTE,
      loadStart: 'FETCH_QUOTE_LOADING',
      payload:  getQuote()
    });
  });
});
