import React, { Component } from 'react';

import { SelectList } from 'modules/core/components';

class RepoSelect extends Component {
  state = {
    selectedRepoId: null,
  };

  componentDidMount() {
    const { requestRepos } = this.props;
    requestRepos();
  }

  handleRepoSelected = (value) => {
    this.setState({ selectedRepoId: value });
  };

  repoOptions = () => {
    const { repos = [] } = this.props;

    return Object.keys(repos).map((id) => ({
      value: id,
      label: repos[id].name,
    }));
  };

  render() {
    const { selectedRepoId } = this.state;

    const options = this.repoOptions();

    return (
      <div className="repoSelect">
        <SelectList
          value={selectedRepoId}
          onSelection={this.handleRepoSelected}
          options={options} />
      </div>
    );
  }
}

export default RepoSelect;
