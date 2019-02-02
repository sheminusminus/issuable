import React, { Component } from 'react';

import { SelectList } from 'modules/core/components';

class Issues extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { params = {} } = match;

    if (params.id) this.loadIssuesForRepo(params.id);
  }

  componentDidUpdate(prevProps) {
    const { match: { params: prevParams } } = prevProps;
    const { match: { params } } = this.props;

    if (prevParams.id !== params.id && params.id) {
      this.loadIssuesForRepo(params.id);
    }
  }

  loadIssuesForRepo = (id) => {
    const { requestIssues } = this.props;
    requestIssues(id);
  };

  issueOptions = () => {
    const { match, issues } = this.props;
    const { params = {} } = match;

    if (issues && params.id) {
      const repoIssues = issues[params.id] || [];
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
          value={null}
          options={options} />
      </div>
    );
  }
}

export default Issues;
