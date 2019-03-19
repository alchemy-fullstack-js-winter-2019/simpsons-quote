import React from 'react';
import renderer from 'react-test-renderer';
import Load from './Load';

describe('Load', () => {
  it('matches a snapshot', () => {
    const fetch = jest.fn();
    const tree = renderer.create(
      <Load button onClick={fetch}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
