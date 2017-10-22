import React, { Component } from "react";
import reactScroll from "react-scroll";

var Link = reactScroll.Link;
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-section bg-gray-lighter footer">
        <div className="container">
          <div className="footer-text">
            <div className="footer-copy font-alt">
              &copy; 2017
              <a
                href="https://dakotachantz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Dakota Nichols
              </a>
              &nbsp;&
              <a href="" target="_blank" rel="noopener noreferrer">
                &nbsp;Hamilton Moore
              </a>
            </div>
          </div>
        </div>
        <div>
          <Link
            to="top"
            activeClass="activeScroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            className="link-to-top"
          >
            <i className="fa fa-caret-up" />
          </Link>
        </div>
      </footer>
    );
  }
}
