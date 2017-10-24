import React, { Component } from "react";
import mapStyles from "../mapStyles";
const google = window.google;

export default class Map extends Component {
  constructor() {
    super(...arguments);
    this.map = null;
    this.mapEl = null;
    this.userLocation = null;
    this.mapPoints = [];
    this.center = { lat: 36.174, lng: -86.767 };
  }

  initMap() {
    this.drawMap();
    this.showUser();
  }

  showUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.center = pos;
          this.userLocation = pos;

          const userInfoWindow = new google.maps.InfoWindow();
          userInfoWindow.setPosition(this.userLocation);
          userInfoWindow.setContent("You are here");
          userInfoWindow.open(this.map);

          this.centerMap();
          this.zoomMap();
        },
        () => {}
      );
    }
  }

  drawMap() {
    // if(this.props.selectedService.location) this.center = selectedService.loc
    this.map = new google.maps.Map(this.mapEl, {
      center: this.center,
      zoom: 12,
      styles: mapStyles
    });
  }
  zoomMap() {
    this.map.setZoom(16);
  }
  centerMap() {
    this.map.setCenter(this.center);
  }

  handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);
  };

  determineMarker = dataPoint => {
    let label = {};
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

  clearMap() {
    this.mapPoints.forEach(({ marker, infoWindow }) => {
      marker.setMap(null);
      infoWindow.setMap(null);
    });
  }

  updateMapView(nextProps) {
    this.clearMap();
    this.mapPoints = nextProps.filtered.map(dataPoint => {
      let marker = new google.maps.Marker({
        position: {
          lat: dataPoint.latitude,
          lng: dataPoint.longitude
        },
        type: "Point",
        map: this.map,
        label: this.determineMarker(dataPoint)
      });
      let infoWindow = new google.maps.InfoWindow();
      marker.addListener("click", () => {
        this.props.onOpen(dataPoint);
      });

      if (dataPoint.isOpen) {
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

        infoWindow.open(this.map, marker);

        infoWindow.addListener("closeclick", () => {
          this.props.onClose(dataPoint);
        });
      }

      return { marker, infoWindow };
    });
  }

  componentDidMount = () => {
    this.initMap();
  };

  componentWillReceiveProps(nextProps) {
    this.updateMapView(nextProps);
  }

  render() {
    return (
      <div className="map-section" ref={el => (this.mapEl = el)}>
        {}
      </div>
    );
  }
}
