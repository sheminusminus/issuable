import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Button } from '../../modules/core/components';

describe('<Button />', () => {
  it('Renders', () => {
    const renderedValue = renderer.create(
      <Button />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders its children', () => {
    const renderedValue = renderer.create(
      <Button>
        Kidz!
      </Button>,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Respects its `disabled` prop', () => {
    const renderedValue = renderer.create(
      <Button disabled={true}>
        Kidz!
      </Button>,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies className prop to class attribute', () => {
    const item = shallow(
      <Button className="added">
        Kidz!
      </Button>,
    );

    expect(item.find('.button.added').exists()).toEqual(true);
  });

  it('simulates click events', () => {
    const onButtonClick = jest.fn();

    const button = shallow(
      <Button
        onClick={onButtonClick} />,
    );

    button.find('button').simulate('click');

    expect(onButtonClick.mock.calls.length).toBe(1);
  });
});
