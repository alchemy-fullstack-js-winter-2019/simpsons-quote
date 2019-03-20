import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const quote = 'quote';
    const name = 'name';
    const image = 'image';

    const tree = renderer.create(
      <Quote fetch={jest.fn()} quote={quote} name={name} image={image} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
