import React from 'react';
import renderer from 'react-test-renderer';
import Load from './Load';

describe('Load', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Load fetch={jest.fn()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
