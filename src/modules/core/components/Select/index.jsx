import React, { Component } from 'react';

import { classie } from 'utils';

import './styles.scss';

const Option = ({ index, label, className }) => (
  <option
    className={classie(['option', className])}
    value={index}>
    {label}
  </option>
);

class Select extends Component {
  static defaultProps = {
    onChange: () => null,
    value: {},
    options: [],
  };

  handleChange = (evt) => {
    const { options, onChange } = this.props;
    const { target: { value, name } } = evt;
    const selection = options[value];
    onChange(selection, name);
  };

  render() {
    const {
      options,
      name,
      className,
      optionClassName,
    } = this.props;

    return (
      <select
        name={name}
        onChange={this.handleChange}
        className={classie(['select', className])}>
        {options.map((opt, idx) => (
          <Option
            index={idx}
            key={`${name}-option-${idx}`}
            label={opt.label}
            className={optionClassName} />
        ))}
      </select>
    );
  }
}

export default Select;
