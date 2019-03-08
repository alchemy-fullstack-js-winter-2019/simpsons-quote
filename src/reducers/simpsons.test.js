import reducer from './index';

describe('reducer', () => {
  it('handles the fetch quote', () => {
    const state = {
      simpsons: {}
    };
    const fetchedQuote = reducer(state, {
      type: 'FETCH_QUOTE',
      payload: [
        {
          'quote': 'Eat my shorts',
          'character': 'Bart Simpson',
          'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
          'characterDirection': 'Right'
        }
      ]
    });

    expect(fetchedQuote).toEqual({
      simpsons: {
        'quote': 'Eat my shorts',
        'characterImage': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
        'characterName': 'Bart Simpson',
        'loading': false,
      }
    });
  });  
});
