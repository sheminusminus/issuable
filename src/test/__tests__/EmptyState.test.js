import React from 'react';
import renderer from 'react-test-renderer';
import { EmptyState } from '../../modules/core/components';

describe('<EmptyState />', () => {
  it('Renders with given color', () => {
    const renderedValue = renderer.create(
      <EmptyState color={'#11cdef'} />,
    );

    expect(renderedValue).toMatchSnapshot();
  });
});
