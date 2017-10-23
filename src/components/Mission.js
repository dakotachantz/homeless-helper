import React, { Component } from "react";

export default class Mission extends Component {
  render() {
    return (
      <section className="page-section" id="mission">
        <div className="container relative">
          <h2 className="section-title font-alt align-center mb-70 mb-sm-40">
            Our Mission
          </h2>
          <div className="container relative">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2 align-center"
                style={{ margin: "0 auto" }}
              >
                <div className="section-icon">
                  <span className="icon-quote" />
                </div>
                <blockquote className="testimonial">
                  <p>
                    Our Mission is to...Phasellus luctus commodo ullamcorper a
                    posuere rhoncus commodo elit. Aenean congue, risus utaliquam
                    dapibus. Phasellus luctus commodo ullamcorper a posuere
                    rhoncus commodo elit. Aenean congue, risus utaliquam
                    dapibus. Phasellus luctus commodo ullamcorper a posuere
                    rhoncus commodo elit. Aenean congue, risus utaliquam
                    dapibus.
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
