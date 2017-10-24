import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
export default class MobileNav extends Component {
  render() {
    return (
      <Menu right noOverlay>
        <ul className="mobile-ul">
          <li>
            <NavLink to="/" className="mn-has-sub active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/findresources" className="mn-has-sub active">
              Find Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourmission" className="mn-has-sub active">
              Our Mission
            </NavLink>
          </li>
        </ul>
      </Menu>
    );
  }
}
