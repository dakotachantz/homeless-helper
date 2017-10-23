import React, { Component } from "react";
import mapStyles from "../mapStyles";
const google = window.google;
let map;
let infoWindow = new google.maps.InfoWindow();
export default class Map extends Component {
  initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.174, lng: -86.767 },
      zoom: 12,
      styles: mapStyles
    });
  };

  handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  };

  componentDidMount = () => {
    this.initMap();
  };

  determineMarker = dataPoint => {
    let label = {};

    // console.log(dataPoint);
    if (dataPoint.contact_type === "Food Assistance") {
      label.fontFamily = "Fontawesome";
      label.text = "\uf0f5";
    }
    if (dataPoint.contact_type === "Transportation") {
      label.fontFamily = "Fontawesome";
      label.text = "\uf1b9";
    }
    if (dataPoint.contact_type === "Housing") {
      label.fontFamily = "Ionicons";
      label.text = String.fromCharCode("0xf448");
    }
    if (dataPoint.contact_type === "Clothing") {
      label.fontFamily = "Ionicons";
      label.text = String.fromCharCode("0xf4f7");
    }
    return label;
  };

  componentWillReceiveProps(nextProps) {
    // let contactTypes = [
    //   "Food Assistance",
    //   "Clothing",
    //   "Transportation",
    //   "Housing"
    // ];

    // // console.log("nextProps ", nextProps);
    // // if(typeFilter) getFilteredStuff
    // // get all types
    // let filteredItems = nextProps.data.filter(
    //   item =>
    //     item.location_1 !== undefined &&
    //     contactTypes.indexOf(item.contact_type) > -1
    // );

    // console.log("filteredItems: ", filteredItems);

    nextProps.data.forEach(dataPoint => {
      let marker = new google.maps.Marker({
        position: {
          lat: dataPoint.location_1.coordinates[1],
          lng: dataPoint.location_1.coordinates[0]
        },
        type: dataPoint.location_1.type,
        map: map,
        label: this.determineMarker(dataPoint)
        // label: {
        //   fontFamily: "Ionicons", // "Fontawesome" || "Ionicons"
        //   text: String.fromCharCode("0xf448") //FONTAWESOME "\uf1b9" = car | "\uf0f5" = cutlery || IONIC "\f448" = house | "\f4f7" = shirt
        // }
      });
      // marker.label = this.determineMarker(dataPoint);
      let infoWindow = new google.maps.InfoWindow();
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
      let contentString = `
        <div id="content">
        <h2 class="mapItemHeading">${dataPoint.contact}</h2>
        <div id="bodyContent">
        <p>Category: ${dataPoint.contact_type}</p
        <p>Address: <a href="http://maps.google.com/?q=${dataPoint.location_1_address}${dataPoint.location_1_city}${dataPoint.location_1_state}" target="_blank"
        rel="noopener noreferrer">${dataPoint.location_1_address === undefined
          ? ""
          : dataPoint.location_1_address} ${dataPoint.location_1_city}, ${dataPoint.location_1_state}</a></p>
        <p>Phone Number: <a href="tel:${dataPoint.phone_number}">${dataPoint.phone_number}</a></p>
        </div>
        </div>`;
      infoWindow.setPosition(marker.position);
      infoWindow.setContent(contentString);
      map.setCenter(marker.position);
      map.setZoom(13);
    });
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("You are here");
          infoWindow.open(map);
          map.setCenter(pos);
          map.setZoom(15);
        },
        () => {
          this.handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  componentWillUnmount() {
    map = "";
  }

  render() {
    return (
      <div className="map-section" id="map">
        {}
      </div>
    );
  }
}
