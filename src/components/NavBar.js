import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-white.png";
import MobileNav from "./MobileNav";
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "transparent"
    };
  }

  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    // let mobileNav = document.querySelector(".sidenav");
    // if (mobileNav.style.display !== "none") {
    //   mobileNav.style.display = "none";
    // }
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop < 20) {
      this.setState({
        backgroundColor: "transparent"
      });
    } else {
      this.setState({ backgroundColor: "rgba(27, 27, 27, .7)" });
    }
  };
  render() {
    return (
      <nav
        className="main-nav dark stick-fixed"
        style={{
          backgroundColor: this.state.backgroundColor,
          transition: "ease .2s"
        }}
      >
        <div className="full-wrapper relative clearfix">
          <div className="nav-logo">
            <NavLink to="/" className="logo-item">
              <img src={logo} alt="" width="50" />
            </NavLink>
          </div>

          <div className="mobile-nav">
            <MobileNav />
          </div>

          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
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
          </div>
        </div>
      </nav>
    );
  }
}
