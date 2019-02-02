import React, { Component } from 'react';

import {
  Select,
  SelectList,
  CardPanel,
  Button,
  IssueListItem,
  EmptyState,
} from 'modules/core/components';

const sortOptions = [
  { value: 'createdAt:desc', label: 'Newest' },
  { value: 'createdAt:asc', label: 'Oldest' },
  { value: 'updatedAt:desc', label: 'Recently Updated' },
  { value: 'updatedAt:asc', label: 'Least Recently Updated' },
  { value: 'assignee:desc', label: 'Assignee (A-Z)' },
  { value: 'assignee:asc', label: 'Assignee (Z-A)' },
];

const IssuesPanelHeader = ({ repoName, onButtonClick }) => (
  <div className="flexBetween">
    <h5 className="title">Issues for {repoName}</h5>

    <Button
      onClick={onButtonClick}
      className="hide-lg">
      Change
    </Button>
  </div>
);

class Issues extends Component {
  componentDidMount() {
    const { idParam } = this.props;
    if (idParam) this.loadIssuesForRepo(idParam);
  }

  shouldComponentUpdate(nextProps) {
    const { idParam: nextId, sortStringValue: nextSort } = nextProps;
    const { idParam, sortStringValue } = this.props;
    return (nextId !== idParam || nextSort !== sortStringValue);
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
    const { sortStringValue, repoName } = this.props;

    const options = this.issueOptions();

    return (
      <div className="issues panel">
        <IssuesPanelHeader
          onButtonClick={this.handleShowRepos}
          repoName={repoName} />

        <CardPanel className="shadow">
          {options.length > 0 &&
            <>
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
            </>}

          {!options.length && <EmptyState />}
        </CardPanel>
      </div>
    );
  }
}

export default Issues;
