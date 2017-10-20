import React, { Component } from "react";
import { Header } from "../components";
export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {/* <!-- About Section --> */}
          <section className="page-section" id="mission">
            <div className="container relative">
              <h2 className="section-title font-alt align-center mb-70 mb-sm-40">
                Our Mission
              </h2>
              {/* <!-- Slide Item --> */}
              <div>
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 align-center">
                      {/* <!-- Section Icon --> */}
                      <div className="section-icon">
                        <span className="icon-quote" />
                      </div>
                      {/* <!-- Section Title --><h3 className="small-title font-alt">What people say?</h3> */}
                      <blockquote className="testimonial">
                        <p>
                          Our Mission is to...Phasellus luctus commodo
                          ullamcorper a posuere rhoncus commodo elit. Aenean
                          congue, risus utaliquam dapibus. Phasellus luctus
                          commodo ullamcorper a posuere rhoncus commodo elit.
                          Aenean congue, risus utaliquam dapibus. Phasellus
                          luctus commodo ullamcorper a posuere rhoncus commodo
                          elit. Aenean congue, risus utaliquam dapibus.
                        </p>
                        {/* <footer className="testimonial-author">
                          John Doe, doodle inc.
                        </footer> */}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
