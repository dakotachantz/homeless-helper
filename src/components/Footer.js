import React, { Component } from "react";
import logo from "../img/logo-black.png";
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-section bg-gray-lighter footer">
        <div className="container">
          <div className="footer-text">
            <div className="footer-copy font-alt">
              &copy; 2017
              <a href="https://dakotachantz.com/" target="_blank">
                &nbsp;Dakota Nichols
              </a>
              &nbsp;&
              <a href="" target="_blank">
                &nbsp;Hamilton Moore
              </a>
            </div>
          </div>
        </div>
        <div>
          <a href="#top" className="link-to-top">
            <i className="fa fa-caret-up" />
          </a>
        </div>
      </footer>
    );
  }
}
