import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { CardPanel } from '../../modules/core/components';

describe('<CardPanel />', () => {
  it('Renders', () => {
    const renderedValue = renderer.create(
      <CardPanel />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders its children', () => {
    const renderedValue = renderer.create(
      <CardPanel>
        <p>All my children</p>
      </CardPanel>,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies className prop to class attribute', () => {
    const item = shallow(
      <CardPanel className="added" />,
    );

    expect(item.find('.card-panel.added').exists()).toEqual(true);
  });
});
