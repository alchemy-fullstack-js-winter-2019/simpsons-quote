import { getQuote, getCharacterImage, getCharacterName, isLoading } from './simpsons';

describe('selectors test', () => {
  it('can get get the quote', () => {
    const state = {
      simpsons: 
        {
          quote: 'I\'m sleeping in the bath tub.'
        }
    };
    const fetchedQuote = getQuote(state);

    expect(fetchedQuote).toEqual('I\'m sleeping in the bath tub.');
  });

  it('can get get the character name', () => {
    const state = {
      simpsons: 
        {
          characterName: 'Marge Simpson',
        }
    };
    const fetchedCharacterName = getCharacterName(state);
      
    expect(fetchedCharacterName).toEqual('Marge Simpson');
  });

  it('can get the character image', () => {
    const state = {
      simpsons: 
        {
          characterImage: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205'
        }
    };
    const fetchedCharacterImage = getCharacterImage(state);
      
    expect(fetchedCharacterImage).toEqual('https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205');
  });

  it('can get loading from state', () => {
    const state = {
      simpsons: 
        {
          loading: 'true'
        }
    };
    const fetchedLoading = isLoading(state);
      
    expect(fetchedLoading).toEqual('true');
  });
});
