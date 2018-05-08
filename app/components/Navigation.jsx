import React, { Component } from "react";
import { Link, IndexLink } from "react-router";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu" data-dropdown-menu>
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="is-active">
                Timer
              </IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="is-active">
                Countdown
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu" data-dropdown-menu>
            <li className="menu-text">
              Created by <a>Denisson</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
