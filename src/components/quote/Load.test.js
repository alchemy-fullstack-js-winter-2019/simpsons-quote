import React from 'react';
import renderer from 'react-test-renderer';
import Load  from './Load';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const fetch = jest.fn();
    const tree = renderer.create(
      <Load fetch={fetch} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
