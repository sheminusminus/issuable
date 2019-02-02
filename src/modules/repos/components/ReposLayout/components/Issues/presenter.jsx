import React, { Component } from 'react';

import { Select, SelectList } from 'modules/core/components';

const sortOptions = [
  { value: 'createdAt:desc', label: 'Newest' },
  { value: 'createdAt:asc', label: 'Oldest' },
  { value: 'updatedAt:desc', label: 'Recently Updated' },
  { value: 'updatedAt:asc', label: 'Least Recently Updated' },
  { value: 'assignee:desc', label: 'Assignee (A-Z)' },
  { value: 'assignee:asc', label: 'Assignee (Z-A)' },
];

class Issues extends Component {
  state = {
    sortBy: sortOptions[0].value,
  };

  componentDidMount() {
    const { idParam } = this.props;
    if (idParam) this.loadIssuesForRepo(idParam);
  }

  componentDidUpdate(prevProps) {
    const { idParam: lastIdParam } = prevProps;
    const { idParam } = this.props;

    if (idParam && lastIdParam !== idParam) {
      this.loadIssuesForRepo(idParam);
    }
  }

  loadIssuesForRepo = (id) => {
    const { requestIssues } = this.props;
    requestIssues(id);
  };

  issueOptions = () => {
    const {
      issues,
    } = this.props;

    return issues.map((item) => ({
      value: item.id,
      label: item.title,
    }));
  };

  handleSortChange = (sortBy) => {
    const { setIssuesSort } = this.props;
    const [property, dir] = sortBy.split(':');
    setIssuesSort(property, dir);
  };

  render() {
    const { sortStringValue } = this.props;

    const options = this.issueOptions();

    return (
      <div className="issues panel">
        <Select
          onChange={this.handleSortChange}
          value={sortStringValue}
          options={sortOptions} />

        <SelectList
          name="issues"
          value={null}
          options={options} />
      </div>
    );
  }
}

export default Issues;
