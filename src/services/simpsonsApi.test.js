const { getQuotes } = require('./simpsonsApi');

jest.mock('./simpsonsApi');

describe('simpsonsApi wireup', () => {
  it('gets a quote', () => {
    return getQuotes()
      .then(quote => {
        expect(quote).toEqual('My cats breath smells like cat food');
      });
  });
});
