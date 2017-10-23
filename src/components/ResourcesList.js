import React, { Component } from "react";
import axios from "axios";
import Map from "./Map";

import resourceHeaderImg from "../img/resource-header.jpg";
import reactScroll from "react-scroll";
// const google = window.google;
let Link = reactScroll.Link;
export default class ResourcesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentWillMount = () => {
    axios
      .get("https://data.nashville.gov/resource/8zc7-2afq.json")
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
        console.log("this.state ", this.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
        <section
          className="page-section"
          style={{
            padding: "100px 0",
            background: "#fff"
          }}
        >
          <div className="container relative">
            <h2 className="section-title font-alt mb-70 mb-sm-40">
              Filter By Resource
            </h2>
            <ul className="nav nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
              <li>
                <Link
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  href=""
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-android-globe" />
                  </div>
                  All
                </Link>
              </li>
              <li>
                <Link
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  href=""
                >
                  <div className="alt-tabs-icon">
                    <span className="fa fa-cutlery" />
                  </div>
                  Food
                </Link>
              </li>
              <li>
                <Link
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  href=""
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-tshirt" />
                  </div>
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  href=""
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-ios-home" />
                  </div>
                  Shelter
                </Link>
              </li>
              <li>
                <Link
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  href=""
                >
                  <div className="alt-tabs-icon">
                    <span className="fa fa-car" />
                  </div>
                  Transportation
                </Link>
              </li>
            </ul>
            {/* <!-- End Nav tabs --> */}
          </div>
        </section>
        {/* <!-- Resources */}
        <section
          className="resources"
          id="resources"
          style={{ display: "flex", flexDirection: "row", minHeight: "80.1vh" }}
        >
          <span
            className="resourcesList"
            style={{
              background: "#fff",
              color: "black",
              flex: 1,
              border: "1px solid lightgray",
              overflow: "auto",
              height: "80.1vh"
            }}
          >
            {this.state.data !== ""
              ? this.state.data.map((item, index) => {
                  return (
                    <div className="card" key={index}>
                      <span>{item.contact}</span>
                      <span className="text-muted">
                        Category: {item.contact_type}
                      </span>
                    </div>
                  );
                })
              : "Loading..."}
          </span>
          <div className="google-map">
            <div className="map-section" id="map">
              <div className="map-toggle">
                <div className="mt-text font-alt">
                  <div
                    style={{
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
          {<Map data={this.state.data} />}
        </section>
      </div>
    );
  }
}
