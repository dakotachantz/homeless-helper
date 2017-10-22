import React, { Component } from "react";
import resourceHeaderImg from "../img/resource-header.jpg";

export default class ResourcesList extends Component {
  render() {
    return (
      <div>
        <header
          className="bg-dark-alfa-30"
          style={{
            backgroundImage: `url(${resourceHeaderImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundPositionY: "bottom",
            backgroundPositionX: "right"
          }}
        >
          <h1
            className="font-alt"
            style={{ position: "relative", zIndex: "100" }}
          >
            Find Resources
          </h1>
        </header>
        {/* <!-- Services Section --> */}
        <section
          className="page-section"
          id="services"
          style={{
            padding: "100px 0",
            background: "#fff"
          }}
        >
          <div className="container relative">
            <h2 className="section-title font-alt mb-70 mb-sm-40">
              Filter By Resource
            </h2>

            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
              <li className="active">
                <a href="">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-android-globe" />
                  </div>
                  All
                </a>
              </li>
              <li>
                <a href="">
                  <div className="alt-tabs-icon">
                    <span className="fa fa-cutlery" />
                  </div>
                  Food
                </a>
              </li>
              <li>
                <a href="">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-tshirt" />
                  </div>
                  Clothing
                </a>
              </li>
              <li>
                <a href="#service-development">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-ios-home" />
                  </div>
                  Shelter
                </a>
              </li>
              <li>
                <a href="#service-photography">
                  <div className="alt-tabs-icon">
                    <span className="fa fa-car" />
                  </div>
                  Transportation
                </a>
              </li>
            </ul>
            {/* <!-- End Nav tabs --> */}
          </div>
        </section>
        {/* <!-- Google Map --> */}
        <span
          className="resourcesList"
          style={{
            position: "absolute",
            background: "#fff",
            color: "black",
            zIndex: "1",
            width: "49%",
            minHeight: 533,
            border: "1px solid lightgray"
          }}
        >
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below. Display list of resources below.
          Display list of resources below.
        </span>
        <div className="google-map">
          <div id="map-canvas" />
          <div className="map-section" id="map">
            <div className="map-toggle">
              <div className="mt-text font-alt">
                <div
                  style={{
                    width: "50vw",
                    margin: "0 auto",
                    textAlign: "center"
                  }}
                >
                  No Map data to display
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
