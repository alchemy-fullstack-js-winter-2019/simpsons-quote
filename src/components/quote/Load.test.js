import React from 'react';
import renderer from 'react-test-renderer';

describe('Load', () => {
  it('matches a snapshot', () => {
    const fetch = jest.fn();
    const tree = renderer.create(
      <button onClick={fetch} >Next</button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
