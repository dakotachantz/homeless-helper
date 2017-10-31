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
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    axios
      .get("https://homeless-helper.herokuapp.com/allResources", config)
      .then(response => {
        let contactTypes = [
          "Food Assistance",
          "Clothing",
          "Transportation",
          "Housing",
          "Job Training & Placement"
        ];
        let filteredItems = response.data.filter(
          item =>
            item.latitude === undefined ||
            (item.latitude !== 0 &&
              contactTypes.indexOf(item.contact_type) > -1)
        );
        filteredItems.sort((a, b) => a.contact.localeCompare(b.contact));
        this.setState({ data: filteredItems, filtered: filteredItems });
      });
  };

  getResources = resourceType => {
    let contactTypes = [
      "Food Assistance",
      "Clothing",
      "Transportation",
      "Housing",
      "Job Training & Placement"
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

  toggleItem(dataPoint) {
    this.setState(oldState =>
      Object.assign({}, oldState, {
        filtered: oldState.filtered.map(item =>
          Object.assign({}, item, {
            isOpen: item.id === dataPoint.id ? !dataPoint.isOpen : false
          })
        )
      })
    );
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <header
          className="bg-dark-alfa-30"
          style={{
            backgroundImage: `url(${resourceHeaderImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
            style={{ position: "relative", zIndex: "100", textAlign: "center" }}
          >
            Nashville Resources
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
              Choose Resource
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
                    this.getResources("Job Training & Placement");
                  }}
                  to="resources"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <div
                    className="alt-tabs-icon"
                    style={{ marginBottom: "13px" }}
                  >
                    <span className="fa fa-briefcase" />
                  </div>
                  Job Training
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
          </div>
        </section>
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
                  <div
                    className="card"
                    key={item.id}
                    onClick={() => this.toggleItem(item)}
                  >
                    <span>{item.contact}</span>
                    <span className="text-muted">
                      Category: {item.contact_type}
                    </span>
                  </div>
                );
              })
            ) : (
              <div className="loader">Loading...</div>
            )}
          </span>
          <div className="google-map">
            <Map
              filtered={this.state.filtered}
              onOpen={dataPoint => {
                this.toggleItem(dataPoint);
              }}
              onClose={dataPoint => {
                this.toggleItem(dataPoint);
              }}
              selectedService={this.state.selectedService}
            />
          </div>
        </section>
      </div>
    );
  }
}
