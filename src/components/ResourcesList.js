import React, { Component } from "react";
import axios from "axios";
import Map from "./Map";
import resourceHeaderImg from "../img/resource-header.jpg";
import reactScroll from "react-scroll";
let Link = reactScroll.Link;
export default class ResourcesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      filtered: ""
    };
  }

  componentWillMount = () => {
    axios
      .get("https://data.nashville.gov/resource/8zc7-2afq.json")
      .then(response => {
        let contactTypes = [
          "Food Assistance",
          "Clothing",
          "Transportation",
          "Housing"
        ];
        let filteredItems = response.data.filter(
          item =>
            item.location_1 !== undefined &&
            contactTypes.indexOf(item.contact_type) > -1
        );
        this.setState({ data: filteredItems, filtered: filteredItems });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getResources = resourceType => {
    let contactTypes = [
      "Food Assistance",
      "Clothing",
      "Transportation",
      "Housing"
    ];
    contactTypes.forEach(contactType => {
      if (resourceType === contactType) {
        let filtered = this.state.data.filter(
          item => item.contact_type === resourceType
        );
        this.setState({ filtered });
      }
    });
    if (resourceType === "All") {
      this.setState({ filtered: this.state.data });
    }
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
            background: "#fff",
            minHeight: "50vh"
          }}
        >
          <div className="container relative">
            <h2 className="section-title font-alt mb-70 mb-sm-40">
              Filter By Resource
            </h2>
            <ul className="nav nav-tabs tpl-alt-tabs font-alt pt-30 pt-sm-0 pb-30 pb-sm-0">
              <li>
                <Link
                  onClick={() => {
                    this.getResources("All");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-android-globe" />
                  </div>
                  All
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.getResources("Food Assistance");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <div className="alt-tabs-icon">
                    <span className="fa fa-cutlery" />
                  </div>
                  Food
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.getResources("Clothing");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-tshirt" />
                  </div>
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.getResources("Housing");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-ios-home" />
                  </div>
                  Shelter
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    this.getResources("Transportation");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
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
        <section className="resources" id="resources">
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
            {this.state.filtered !== "" ? (
              this.state.filtered.map((item, index) => {
                return (
                  <div className="card" id={index} key={index}>
                    <span>{item.contact}</span>
                    <span className="text-muted">
                      Category: {item.contact_type}
                    </span>
                  </div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </span>
          <div className="google-map">
            <Map data={this.state.data} filtered={this.state.filtered} />
            <div className="detail">
              This is detail for the item you clicked on
            </div>
          </div>
        </section>
      </div>
    );
  }
}
