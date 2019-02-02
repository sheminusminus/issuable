import React, { Component } from 'react';

import { SelectList } from 'modules/core/components';

class Issues extends Component {
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
    const { idParam, issues } = this.props;

    if (issues && idParam) {
      const repoIssues = issues[idParam] || [];
      return Object.keys(repoIssues).map((id) => ({
        value: id,
        label: repoIssues[id].title,
      }));
    }

    return [];
  };

  render() {
    const options = this.issueOptions();

    return (
      <div className="issues">
        <SelectList
          name="issues"
          value={null}
          options={options} />
      </div>
    );
  }
}

export default Issues;
