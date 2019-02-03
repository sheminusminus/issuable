import React, { Component } from 'react';

import { Routing, sortOptions } from 'config';
import { randomColor, arrayMove } from 'utils';

import {
  Select,
  SelectList,
  CardPanel,
  Button,
  IssueListItem,
  EmptyState,
} from 'modules/core/components';

const keys = {
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

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
  state = {
    selectedIssue: null,
  };

  componentDidMount() {
    const { repoId } = this.props;
    if (repoId) this.loadIssuesForRepo(repoId);
  }

  componentDidUpdate(prevProps) {
    const { repoId: lastrepoId } = prevProps;
    const { repoId } = this.props;

    if (repoId && lastrepoId !== repoId) {
      // reload the issues if we've switched selected repos
      this.loadIssuesForRepo(repoId);
    }
  }

  // returns to the main list
  handleShowRepos = () => {
    const { history } = this.props;
    history.push(Routing.clientRepos());
  };

  loadIssuesForRepo = (id) => {
    const { requestIssues } = this.props;
    requestIssues(id);
  };

  // formats the issues array for select list
  issueOptions = () => {
    const {
      issues,
      issuesOrder,
      repoId,
      sortStringValue,
    } = this.props;

    if (sortStringValue.includes('custom')) {
      // this code block, and the data informing it, DEFINITELY
      // in need of some tlc and refactoring...
      // still largely in experimental phase
      const ordered = issuesOrder[repoId];

      if (Array.isArray(ordered)) {
        const data = issues.reduce((obj, item) => ({
          ...obj,
          [item.id]: item,
        }), {});

        return ordered.map(id => ({
          value: id,
          label: data[id].title,
          data: data[id],
        }));
      }
    }

    return issues.map((item) => ({
      value: item.id,
      label: item.title,
      data: item,
    }));
  };

  handleSortChange = (sortBy) => {
    const { setIssuesSort } = this.props;
    const [property, dir] = sortBy.split(':');
    setIssuesSort(property, dir || '');
  };

  handleIssueSelected = (selectedIssue) => {
    this.setState({ selectedIssue });
  };

  handleIssueKeyDown = (key, id) => {
    const {
      issuesOrder,
      issues,
      setIssuesOrder,
      repoId,
      sortStringValue,
    } = this.props;

    if (sortStringValue.includes('custom')) {
      const issueIds = issuesOrder[repoId] || issues.map(iss => iss.id) || [];
      const currentIndex = issueIds.indexOf(id);

      if (currentIndex > -1) {
        let nextIndex = currentIndex;
        if (key === keys.UP) {
          nextIndex = Math.max(0, currentIndex - 1);
        } else if (key === keys.DOWN) {
          nextIndex = Math.min(issueIds.length - 1, currentIndex + 1);
        }

        const reordered = arrayMove(issueIds, currentIndex, nextIndex);
        setIssuesOrder(repoId, reordered);
      }
    }
  };

  render() {
    const { sortStringValue, repoName, fetchingIssues } = this.props;
    const { selectedIssue } = this.state;

    const options = this.issueOptions();

    return (
      <div className="issues panel">
        <IssuesPanelHeader
          onButtonClick={this.handleShowRepos}
          repoName={repoName} />

        <CardPanel className="shadow">
          {!fetchingIssues && options.length > 0 &&
            <>
              <div className="mb">
                <Select
                  className="issueSortSelect"
                  onChange={this.handleSortChange}
                  value={sortStringValue}
                  options={sortOptions} />
              </div>

              <SelectList
                onItemKeyDown={this.handleIssueKeyDown}
                onSelection={this.handleIssueSelected}
                OptionComponent={IssueListItem}
                name="issues"
                value={selectedIssue}
                options={options} />
            </>}

          {!fetchingIssues && !options.length &&
            <EmptyState color={randomColor()} />}
        </CardPanel>
      </div>
    );
  }
}

export default Issues;
