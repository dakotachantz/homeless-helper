import React, { Component } from "react";
import headerImg from "../img/home-header.jpg";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <section
          className="home-section bg-dark-alfa-30 parallax-2"
          id="home"
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          <div
            className="js-height-full container"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="home-content">
              <div className="home-text">
                <h1 className="hs-line-1 font-alt mb-80 mb-xs-30 mt-50 mt-sm-0">
                  Homeless Helper
                </h1>

                <div className="hs-line-6">
                  Looking for resources? Click below!
                </div>
                <br />
                <NavLink
                  to="/findresources"
                  className="btn btn-mod btn-glass btn-large"
                  style={{ borderRadius: "40px" }}
                >
                  Find Resources
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
