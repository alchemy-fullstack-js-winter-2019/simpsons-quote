import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote test', () => {
  it('matches a snapshot', () => {
    const fetch = jest.fn();
    const quote = 'I\'m sleeping in the bath tub.';
    const characterName = 'Marge Simpson';
    const characterImage = 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205';
    const loading = false;

    const tree = renderer.create(
      <Quote loading={loading} 
        quote={quote} 
        characterName={characterName} 
        characterImage={characterImage} 
        fetch={fetch} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
