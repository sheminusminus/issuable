import React from 'react';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Select from '../../modules/core/components/Select';

const options = [
  { value: 1, label: 'First option' },
  { value: 2, label: 'Second option' },
];

describe('<Select />', () => {
  it('Renders', () => {
    const renderedValue = renderer.create(
      <Select />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders without placeholder option', () => {
    const renderedValue = renderer.create(
      <Select showPlaceholder={false} />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with custom placeholder option', () => {
    const renderedValue = renderer.create(
      <Select placeholder="PICK ONE!!!" />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with options', () => {
    const renderedValue = renderer.create(
      <Select options={options} />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with name prop', () => {
    const renderedValue = renderer.create(
      <Select name="theSelectizer" />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with value prop', () => {
    const renderedValue = renderer.create(
      <Select value={1} />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies className prop to class attribute', () => {
    const item = shallow(
      <Select className="added" />,
    );

    expect(item.find('.select.added').exists()).toEqual(true);
  });

  it('Applies optionClassName prop to child options class attributes', () => {
    const wrapper = render(
      <Select
        options={options}
        optionClassName="added" />,
    );

    expect(wrapper.find('.option.added').length).toEqual(3);
  });

  it('simulates change events', () => {
    const onChangeMock = jest.fn();
    const event = { target: { value: 2 } };

    const item = shallow(
      <Select
        value={1}
        options={options}
        onChange={onChangeMock} />,
    );

    item.find('select').simulate('change', event);

    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
