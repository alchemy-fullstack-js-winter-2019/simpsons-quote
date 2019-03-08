import { getQuote, getCharacter, getImage } from './simpsons';

describe('actions', () => {
  it('gets a quote', () => {
    const state = {
      simpsons: {
        quote: 'hi',
        character: 'bart',
        image: 'nothing'
      }
    };

    const results = getQuote(state);

    expect(results).toEqual('hi');
  });

  it('gets a character', () => {
    const state = {
      simpsons: {
        quote: 'hi',
        character: 'bart',
        image: 'nothing'
      }
    };

    const results = getCharacter(state);

    expect(results).toEqual('bart');
  });


});
