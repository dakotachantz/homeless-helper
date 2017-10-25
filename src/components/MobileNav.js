import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white.png";
export default class MobileNav extends Component {
  render() {
    return (
      <Menu right noOverlay>
        <div
          className="nav-logo"
          style={{
            margin: "2em",
            display: "flex",
            height: "1em",
            justifyContent: "center"
          }}
        >
          <NavLink
            to="/"
            className="logo-item"
            style={{ height: "min-content" }}
          >
            <img src={logo} alt="" width="50" />
          </NavLink>
        </div>
        <ul className="mobile-ul">
          <NavLink to="/" className="mn-has-sub active">
            <li>Home</li>
          </NavLink>
          <NavLink to="/findresources" className="mn-has-sub active">
            <li>Find Resources</li>
          </NavLink>
          <NavLink to="/aboutus" className="mn-has-sub active">
            <li>About</li>
          </NavLink>
          <NavLink to="/addresource" className="mn-has-sub active">
            <li>Add Resources</li>
          </NavLink>
        </ul>
      </Menu>
    );
  }
}
