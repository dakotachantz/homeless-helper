import React, { Component } from "react";
import resourceHeaderImg from "../img/resource-header.jpg";
// import { GoogleApiWrapper } from "google-maps-react";
// import axios from "axios";
// import <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPG_wLtTrsdF_c8N_foAK7Tg0HBB01tg&callback=initMap"
// type="text/javascript"></script>
export default class ResourcesList extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  //   componentWillMount() {
  //     const script = document.createElement("script");

  //     script.src =
  //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPG_wLtTrsdF_c8N_foAK7Tg0HBB01tg&callback=initMap";
  //     script.async = true;

  //     document.body.appendChild(script);
  //     // axios
  //     //   .get(
  //     //     "maps.googleapis.com/maps/api/js?key=AIzaSyDJPG_wLtTrsdF_c8N_foAK7Tg0HBB01tg&callback=initMap"
  //     //   )
  //     //   .then(function(response) {
  //     //     console.log(response);
  //     //   })
  //     //   .catch(function(error) {
  //     //     console.log(error);
  //     //   });
  //     //maps.googleapis.com/maps/api/js?key=AIzaSyDJPG_wLtTrsdF_c8N_foAK7Tg0HBB01tg&callback=initMap

  //     var map, infoWindow;
  //     function initMap() {
  //       map = new google.maps.Map(document.getElementById("map"), {
  //         center: { lat: 36.174, lng: -86.767 },
  //         zoom: 12
  //       });
  //       infoWindow = new google.maps.InfoWindow();

  //       // Try HTML5 geolocation.
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           function(position) {
  //             var pos = {
  //               lat: position.coords.latitude,
  //               lng: position.coords.longitude
  //             };

  //             infoWindow.setPosition(pos);
  //             infoWindow.setContent("Location found.");
  //             infoWindow.open(map);
  //             map.setCenter(pos);
  //             map.setZoom(18);
  //           },
  //           function() {
  //             handleLocationError(true, infoWindow, map.getCenter());
  //           }
  //         );
  //       } else {
  //         // Browser doesn't support Geolocation
  //         handleLocationError(false, infoWindow, map.getCenter());
  //       }
  //     }

  //     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //       infoWindow.setPosition(pos);
  //       infoWindow.setContent(
  //         browserHasGeolocation
  //           ? "Error: The Geolocation service failed."
  //           : "Error: Your browser doesn't support geolocation."
  //       );
  //       infoWindow.open(map);
  //     }
  //   }

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
            padding: "60px 0",
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
                <a href="" data-toggle="tab">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-android-globe" />
                  </div>
                  All
                </a>
              </li>
              <li>
                <a href="" data-toggle="tab">
                  <div className="alt-tabs-icon">
                    <span className="fa fa-cutlery" />
                  </div>
                  Food
                </a>
              </li>
              <li>
                <a href="" data-toggle="tab">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-tshirt" />
                  </div>
                  Clothing
                </a>
              </li>
              <li>
                <a href="#service-development" data-toggle="tab">
                  <div className="alt-tabs-icon">
                    <span className="ionicons ion-home" />
                  </div>
                  Shelter
                </a>
              </li>
              <li>
                <a href="#service-photography" data-toggle="tab">
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
