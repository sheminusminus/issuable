import React from 'react';
import moment from 'moment';

import { classie } from 'utils';

import fallbackImg from 'assets/images/unassigned.png';

const DetailsLine = ({ title, created, updated }) => (
  <div className="details">
    {title}
    <br />
    <span className="times">
      created {created} • updated {updated}
    </span>
  </div>
);

class IssueListItem extends React.Component {
  handleKeyDown = (evt) => {
    const { onKeyDown, value } = this.props;
    const { key } = evt;
    evt.preventDefault();
    onKeyDown(key, value);
  };

  handleSelect = () => {
    const { onSelect, value } = this.props;
    onSelect(value);
  };

  handleBlur = () => {
    const { onSelect } = this.props;
    onSelect(null);
  };

  render() {
    const {
      option,
      value,
      selectedValue,
    } = this.props;

    const {
      assigneeAvatar,
      assignee,
      title,
      createdAt,
      updatedAt,
    } = option.data;

    const created = moment(createdAt).format('MM/DD/YYYY');
    const updated = moment(updatedAt).fromNow();

    return (
      <li
        tabIndex={1}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleSelect}
        onBlur={this.handleBlur}
        className={classie(['selectListItem', 'issueListItem'], {
          selected: selectedValue === value,
        })}>
        <div className="imgWrap">
          <img src={assigneeAvatar || fallbackImg} alt={assignee} />
        </div>

        <DetailsLine
          title={title}
          created={created}
          updated={updated} />
      </li>
    );
  }
}

export default IssueListItem;
