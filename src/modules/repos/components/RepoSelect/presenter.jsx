import React, { Component } from 'react';

import { Select } from 'modules/core/components';

import './styles.scss';

class RepoSelect extends Component {
  componentDidMount() {
    const { requestRepos } = this.props;
    requestRepos();
  }

  handleRepoSelected = (selection) => {
    console.log(selection);
  };

  render() {
    return (
      <div className="repoSelect">
        <Select
          onChange={this.handleRepoSelected}
          options={[]} />
      </div>
    );
  }
}

export default RepoSelect;
