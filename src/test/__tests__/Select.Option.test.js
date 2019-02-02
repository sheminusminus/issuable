import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Option } from '../../modules/core/components/Select';

describe('<Option />', () => {
  it('Renders', () => {
    const renderedValue = renderer.create(
      <Option />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders as hidden', () => {
    const renderedValue = renderer.create(
      <Option hidden={true} />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with label prop', () => {
    const renderedValue = renderer.create(
      <Option label="Net worth" />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Renders with value prop', () => {
    const renderedValue = renderer.create(
      <Option value="One dollhair" />,
    );

    expect(renderedValue).toMatchSnapshot();
  });

  it('Applies className prop to class attribute', () => {
    const item = shallow(
      <Option className="added" />,
    );

    expect(item.find('.option.added').exists()).toEqual(true);
  });
});
