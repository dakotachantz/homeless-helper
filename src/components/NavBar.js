import React, { Component } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white.png";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="main-nav dark transparent stick-fixed">
        <div className="full-wrapper relative clearfix">
          <div className="nav-logo-wrap local-scroll">
            <NavLink to="#top" className="logo">
              <img src={logo} alt="" width="50" />
            </NavLink>
          </div>

          <div className="mobile-nav">
            <i className="fa fa-bars" />
          </div>

          {/* <!-- Main Menu --> */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {/* <!-- Item With Sub --> */}
              <li>
                <NavLink to="/" className="mn-has-sub active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/#mission" className="mn-has-sub active">
                  Our Mission
                </NavLink>
              </li>
              <li>
                <NavLink to="/findresources" className="mn-has-sub active">
                  Find Resources
                </NavLink>
              </li>
              {/* <!-- End Languages --> */}
            </ul>
          </div>
          {/* <!-- End Main Menu --> */}
        </div>
      </nav>
    );
  }
}
