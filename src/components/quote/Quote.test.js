import React from 'react';
import renderer from 'react-test-renderer';
import Quote  from './Quote';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const quote = 'quote';
    const characterName = 'name';
    const characterImage = 'image';
    const fetch = jest.fn();
    const loading = false;

    const tree = renderer.create(
      <Quote quote={quote} characterName={characterName} characterImage={characterImage} fetch={fetch} loading={loading} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
