import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import DashboardPage1 from './DashboardPage1';
import DashboardPage2 from './DashboardPage2';
import DashboardPage3 from './DashboardPage3';

class Viewport extends Component {
  render() {
    return (
      <div className="page-viewport">
        <h1>Viewport page</h1>

        <Sidebar urlPrefix={this.props.match.url} />
        <div className="dashboard-container">
          Viewport content in here
          <Route path={`${this.props.match.url}/navigation-1`} component={DashboardPage1} />
          <Route path={`${this.props.match.url}/navigation-2`} component={DashboardPage2} />
          <Route path={`${this.props.match.url}/navigation-3`} component={DashboardPage3} />
        </div>
      </div>
    )
  }
}

export default Viewport;