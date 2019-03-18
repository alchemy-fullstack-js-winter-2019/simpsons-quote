import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { fetchQuotesWithPromise, FETCH_QUOTES } from './simpsons';

jest.mock('../services/simpsonsApi');

describe('simpsons actions test', () => {
  it('can fetch quotes', done => {
    const reducer = jest.fn();
    const store = createStore(
      reducer,
      applyMiddleware(...middleware)
    );
    
    store.dispatch(fetchQuotesWithPromise());
    
    setTimeout(() => {
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_START'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: FETCH_QUOTES,
        payload: 'My cats breath smells like cat food'
      });
      expect(reducer).toHaveBeenCalledWith(undefined, {
        type: 'LOAD_END'
      });
      done();
    }, 100);
  });
});
