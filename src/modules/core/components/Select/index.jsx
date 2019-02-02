import React, { Component } from 'react';

import { classie } from 'utils';

import './styles.scss';

const Option = ({ value, label, className, hidden }) => (
  <option
    hidden={hidden}
    className={classie(['option', className])}
    value={value}>
    {label}
  </option>
);

class Select extends Component {
  static defaultProps = {
    onChange: () => null,
    value: {},
    options: [],
    showPlaceholder: true,
    placeholder: 'Select',
  };

  handleChange = (evt) => {
    const { onChange } = this.props;
    const { target: { value, name } } = evt;
    onChange(value, name);
  };

  render() {
    const {
      value,
      options,
      name,
      className,
      optionClassName,
      showPlaceholder,
      placeholder,
    } = this.props;

    return (
      <select
        value={value || ''}
        name={name}
        onChange={this.handleChange}
        className={classie(['select', className])}>
        {showPlaceholder &&
          <Option
            hidden={true}
            label={placeholder}
            className={optionClassName}
            value="" />}

        {options.map((opt, idx) => (
          <Option
            value={opt.value}
            key={`${name}-option-${idx}`}
            label={opt.label}
            className={optionClassName} />
        ))}
      </select>
    );
  }
}

export default Select;
