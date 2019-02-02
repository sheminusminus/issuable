import React, { Component } from 'react';

import { SelectList } from 'modules/core/components';

class Issues extends Component {
  componentDidMount() {
    const { requestIssues } = this.props;
    requestIssues();
  }

  render() {
    return (
      <div className="issues" />
    );
  }
}

export default Issues;
