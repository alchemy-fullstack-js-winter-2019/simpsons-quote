import React from 'react';
import renderer from 'react-test-renderer';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const quote = {
      character: 'bart',
      quote: 'hi',
      image: 'duh'
    };
     
    const tree = renderer.create(
      <>
        <h2>{quote.character}</h2>
        <h4>{quote.quote}</h4>
        <img src={quote.image} />
      </>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
