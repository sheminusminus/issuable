import React, { Component } from 'react';

import {
  Select,
  SelectList,
  CardPanel,
  Button,
  IssueListItem,
} from 'modules/core/components';

const sortOptions = [
  { value: 'createdAt:desc', label: 'Newest' },
  { value: 'createdAt:asc', label: 'Oldest' },
  { value: 'updatedAt:desc', label: 'Recently Updated' },
  { value: 'updatedAt:asc', label: 'Least Recently Updated' },
  { value: 'assignee:asc', label: 'Assignee (A-Z)' },
  { value: 'assignee:desc', label: 'Assignee (Z-A)' },
];

class Issues extends Component {
  componentDidMount() {
    const { idParam } = this.props;
    if (idParam) this.loadIssuesForRepo(idParam);
  }

  componentDidUpdate(prevProps) {
    const { idParam: lastIdParam } = prevProps;
    const { idParam } = this.props;

    if (idParam && lastIdParam !== idParam) {
      // reload the issues if we've switched selected repos
      this.loadIssuesForRepo(idParam);
    }
  }

  // returns to the main list
  handleShowRepos = () => {
    const { history } = this.props;
    history.push('/repos');
  };

  loadIssuesForRepo = (id) => {
    const { requestIssues } = this.props;
    requestIssues(id);
  };

  // formats the issues array for select list
  issueOptions = () => {
    const {
      issues,
    } = this.props;

    return issues.map((item) => ({
      value: item.id,
      label: item.title,
      data: item,
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

    // text for (mobile-only) "back" button
    const buttonText = `${String.fromCharCode(8249)} Repos`;

    return (
      <div className="issues panel">
        <Button
          onClick={this.handleShowRepos}
          className="hide-lg">
          {buttonText}
        </Button>

        <CardPanel className="shadow">
          <div className="mb">
            <Select
              className="issueSortSelect"
              onChange={this.handleSortChange}
              value={sortStringValue}
              options={sortOptions} />
          </div>

          <SelectList
            OptionComponent={IssueListItem}
            name="issues"
            value={null}
            options={options} />
        </CardPanel>
      </div>
    );
  }
}

export default Issues;
