import React, { Component, PureComponent } from 'react';

import { classie } from 'utils';

import './styles.scss';

class SelectListItem extends PureComponent {
  handleClick = () => {
    const { value, onSelect } = this.props;
    onSelect(value);
  };

  render() {
    const {
      label,
      className,
    } = this.props;

    return (
      <li
        onClick={this.handleClick}
        className={classie(['selectListItem', className])}>
        {label}
      </li>
    );
  }
}

class SelectList extends Component {
  static defaultProps = {
    onSelection: () => null,
    value: {},
    options: [],
  };

  handleSelection = (value) => {
    const { onSelection, name } = this.props;
    onSelection(value, name);
  };

  render() {
    const {
      options,
      name,
      className,
      optionClassName,
      value,
    } = this.props;

    return (
      <ul
        className={classie(['selectList', className])}>
        {options.map((opt, idx) => (
          <SelectListItem
            onSelect={this.handleSelection}
            value={opt.value}
            key={`${name}-item-${idx}`}
            label={opt.label}
            className={classie([optionClassName], {
              selected: value === opt.value,
            })}
          />
        ))}
      </ul>
    );
  }
}

export default SelectList;
