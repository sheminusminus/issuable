import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { TextField } from '../../modules/core/components';

describe('<TextField />', () => {
  it('Renders with empty string default value', () => {
    const renderedValue = renderer.create(
      <TextField />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies its `name` prop', () => {
    const renderedValue = renderer.create(
      <TextField name="fullName" />
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies its `value` prop', () => {
    const renderedValue = renderer.create(
      <TextField value="Teri Dactyl" />
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies className prop to class attribute', () => {
    const item = shallow(
      <TextField className="added" />,
    );

    expect(item.find('.textField.added').exists()).toEqual(true);
  });

  it('simulates change events', () => {
    const onFieldChange = jest.fn();
    const event = { target: { value: 'Teri Dactyl', name: 'fullName' } };

    const item = shallow(
      <TextField
        name="fullName"
        value={''}
        onChange={onFieldChange} />,
    );

    item.find('input').simulate('change', event);

    expect(onFieldChange.mock.calls.length).toBe(1);
  });
});
