import React from 'react';
import moment from 'moment';

import fallbackImg from 'assets/images/unassigned.png';

const IssueListItem = (props) => {
  const {
    assigneeAvatar,
    assignee,
    title,
    createdAt,
    updatedAt,
  } = props.option.data;

  const created = moment(createdAt).format('MM/DD/YYYY');
  const updated = moment(updatedAt).fromNow();

  return (
    <li className="selectListItem issueListItem">
      <div className="imgWrap">
        <img src={assigneeAvatar || fallbackImg} alt={assignee} />
      </div>

      <div className="details">
        {title}
        <br />
        <span className="times">created {created} • updated {updated}</span>
      </div>
    </li>
  );
};

export default IssueListItem;
