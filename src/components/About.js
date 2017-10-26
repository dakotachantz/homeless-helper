import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="page-section" id="mission">
        <div className="container relative">
          <h2 className="section-title font-alt align-center mb-70 mb-sm-40">
            About Us
          </h2>
          <div className="container relative">
            <div className="row">
              <div
                className="col-md-10 col-md-offset-2 align-center"
                style={{ margin: "0 auto" }}
              >
                <div className="section-icon">
                  <span className="icon-quote" />
                </div>
                <blockquote className="testimonial">
                  <p>
                    Homeless Helper was created as a way to share free resources
                    with the homeless for the local area. Available starting for
                    the Nashville Area.
                  </p>
                  <p>
                    If you would to see Homeless Helper in your city send us an
                    email at&nbsp;
                    <a href="mailto:admin@homelesshelper.co">
                      admin@homelesshelper.co
                    </a>.
                  </p>
                  <p className="text-mute">
                    *Data sourced from City of Nashville Open Data API*
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
