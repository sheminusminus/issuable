import React, { Component, PureComponent } from 'react';

import { classie } from 'utils';

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

  renderItem = (opt, idx) => {
    const { OptionComponent, name, optionClassName, value } = this.props;

    if (OptionComponent) {
      return (
        <OptionComponent
          key={`${name}-item-${idx}`}
          selectedValue={value}
          option={opt}
          index={idx}
          onSelect={this.handleSelection} />
      );
    }

    return (
      <SelectListItem
        onSelect={this.handleSelection}
        value={opt.value}
        key={`${name}-item-${idx}`}
        label={opt.label}
        className={classie([optionClassName], {
          selected: value === opt.value,
        })}
      />
    );
  };

  render() {
    const {
      options,
      className,
    } = this.props;

    return (
      <ul
        className={classie(['selectList', className])}>
        {options.map(this.renderItem)}
      </ul>
    );
  }
}

export default SelectList;
