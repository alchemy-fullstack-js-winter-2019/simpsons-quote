import { getQuote, getCharacterImage, getCharacterName, isLoading } from './simpsons';

describe('selectors test', () => {
  it('can get get the quote', () => {
    const state = {
      simpsons: 
        {
          'quote': 'Eat my shorts',
          'characterName': 'Bart Simpson',
          'characterImage': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
          'loading': 'false'
        }
    };

    const fetchedQuote = getQuote(state);
      
    expect(fetchedQuote).toEqual('Eat my shorts');
  });

  it('can get get the character name', () => {
    const state = {
      simpsons: 
        {
          'quote': 'Eat my shorts',
          'characterName': 'Bart Simpson',
          'characterImage': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
          'loading': 'false'
        }
    };

    const fetchedCharacterName = getCharacterName(state);
      
    expect(fetchedCharacterName).toEqual('Bart Simpson');
  });

  it('can get get the character image', () => {
    const state = {
      simpsons: 
        {
          'quote': 'Eat my shorts',
          'characterName': 'Bart Simpson',
          'characterImage': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
          'loading': 'false'
        }
    };

    const fetchedCharacterImage = getCharacterImage(state);
      
    expect(fetchedCharacterImage).toEqual('https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638');
  });

  it('can get get the character image', () => {
    const state = {
      simpsons: 
        {
          'quote': 'Eat my shorts',
          'characterName': 'Bart Simpson',
          'characterImage': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
          'loading': 'false'
        }
    };

    const fetchedLoading = isLoading(state);
      
    expect(fetchedLoading).toEqual('false');
  });
});
