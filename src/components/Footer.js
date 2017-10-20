import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-section bg-gray-lighter footer">
        <div className="container">
          {/* <!-- Footer Logo --> */}
          <div
            className="local-scroll mb-30 wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <a href="#top">
              <img src="" width="78" height="36" alt="" />
              Logo
            </a>
          </div>
          {/* <!-- End Footer Logo --> */}

          {/* <!-- Footer Text --> */}
          <div className="footer-text">
            {/* <!-- Copyright --> */}
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
            {/* <!-- End Copyright --> */}
          </div>
          {/* <!-- End Footer Text -->  */}
        </div>

        {/* <!-- Top Link --> */}
        <div className="local-scroll">
          <a href="#top" className="link-to-top">
            <i className="fa fa-caret-up" />
          </a>
        </div>
        {/* <!-- End Top Link --> */}
      </footer>
    );
  }
}
