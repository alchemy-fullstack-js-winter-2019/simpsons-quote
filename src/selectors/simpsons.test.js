import { getQuote, getCharacterName, getCharacterImage, isLoading } from './simpsons';

describe('simpsons selectors', () => {
  let state = {
    simpsons: {
      quote: 'Can/t we have one meeting that doesn/t end with us digging up a corpse?',
      character:'Mayor Quimby',
      image:'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799',
      loading: false
    }
  };

  it('gets a quote from state', () => {
    expect(getQuote(state)).toEqual('Can/t we have one meeting that doesn/t end with us digging up a corpse?');
  });

  it('gets a character name from state', () => {
    expect(getCharacterName(state)).toEqual('Mayor Quimby');
  });

  it('gets a character image from state', () => {
    expect(getCharacterImage(state)).toEqual('https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMayorQuimby.png?1497627527799');
  });

  it('gets is loading from state', () => {
    expect(isLoading(state)).toEqual(false);
  });
});
