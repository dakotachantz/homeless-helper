import React, { Component } from "react";
import mapStyles from "../mapStyles";
const google = window.google;
let map;
export default class Map extends Component {
  initMap = () => {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.174, lng: -86.767 },
      zoom: 12,
      styles: mapStyles
    });
    // map.setCenter(test);
    // map.setZoom(18);
    // Try HTML5 geolocation.
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       function(position) {
    //         var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent("Location found.");
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //         map.setZoom(18);
    //       },
    //       () => {
    //         this.handleLocationError(true, infoWindow, map.getCenter());
    //       }
    //     );
    //   } else {
    //     // Browser doesn't support Geolocation
    //     this.handleLocationError(false, infoWindow, map.getCenter());
    //   }
    // };

    // handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(
    //     browserHasGeolocation
    //       ? "Error: The Geolocation service failed."
    //       : "Error: Your browser doesn't support geolocation."
    //   );
    //   infoWindow.open(map);
  };

  componentDidMount = () => {
    this.initMap();
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps ", nextProps);
    let withCoordinates = nextProps.data.filter(
      item => item.location_1 !== undefined
    );
    withCoordinates.forEach(dataPoint => {
      let marker = new google.maps.Marker({
        position: {
          lat: dataPoint.location_1.coordinates[1],
          lng: dataPoint.location_1.coordinates[0]
        },
        type: dataPoint.location_1.type,
        map: map
      });
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
  }

  componentWillUnmount() {
    map = "";
  }

  render() {
    return <div>{map}</div>;
  }
}
