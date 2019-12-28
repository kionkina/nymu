import React from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';
import AssetStore from '../../lib/AssetStore';

class SubNavMenu extends React.Component {
  render() {
    const {
      links,
      normalLink = false,
      opened = false,
    } = this.props;

    if (!opened) {
      return null;
    }

    return (
      <ul className="side-menu-sublist">
        {links.map(({ to, label }) => (
          <li
            key={to}
            className="side-menu-list-item"
          >
            {normalLink ? (
              <a
                href={to}
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </a>
            ) : (
              <NavLink
                to={to}
                exact
                className="side-menu-nav-link sub-nav-link"
              >
                {label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(SubNavMenu);