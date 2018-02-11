import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <aside className="side-bar">
        <NavLink
          activeClassName="active"
          to={`${this.props.urlPrefix}/navigation-1`}>Navigation 1</NavLink>
        <NavLink
          activeClassName="active"
          to={`${this.props.urlPrefix}/navigation-2`}>Navigation 2</NavLink>
        <NavLink
          activeClassName="active"
          to={`${this.props.urlPrefix}/navigation-3`}>Navigation 3</NavLink>
      </aside>
    )
  }
}

export default Sidebar;