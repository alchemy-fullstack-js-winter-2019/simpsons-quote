import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTE = 'FETCH_QUOTE';
export const fetchQuote = () => ({
  type: FETCH_QUOTE,
  payload: getQuote()
});
