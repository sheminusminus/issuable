import React, { Component } from 'react';

import { Routing } from 'config';

import { SelectList, CardPanel } from 'modules/core/components';

class RepoSelect extends Component {
  state = {
    selectedRepoId: null,
  };

  componentDidMount() {
    const { requestRepos } = this.props;
    requestRepos();
  }

  handleRepoSelected = (value) => {
    const { history } = this.props;

    this.setState({ selectedRepoId: value }, () => {
      history.push(Routing.clientRepoIssues(value));
    });
  };

  repoOptions = () => {
    const { repos = {} } = this.props;

    return Object.keys(repos).map((id) => ({
      value: id,
      label: repos[id].name,
    }));
  };

  render() {
    const { selectedRepoId } = this.state;

    const options = this.repoOptions();

    return (
      <div className="repoSelect panel">
        <h5 className="title">Repositories</h5>

        <CardPanel className="shadow">
          <SelectList
            name="repos"
            value={selectedRepoId}
            onSelection={this.handleRepoSelected}
            options={options} />
        </CardPanel>
      </div>
    );
  }
}

export default RepoSelect;
