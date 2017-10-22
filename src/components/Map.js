import React, { Component } from "react";
import mapStyles from "../mapStyles";
const google = window.google;
let map;
export default class Map extends Component {
  initMap = () => {
    let TIY = { lat: 36.152669, lng: -86.776104 };
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.174, lng: -86.767 },
      zoom: 12,
      styles: mapStyles
    });
    let infoWindow = new google.maps.InfoWindow();
    let marker = new google.maps.Marker({
      position: TIY,
      map: map,
      Title: "The Iron Yard"
    });
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
    infoWindow.setPosition(TIY);
    infoWindow.setContent("The Iron Yard Nashville A place for learning");
    // infoWindow.open(map);
    map.setCenter(TIY);
    map.setZoom(18);
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

  componentWillUnmount() {
    map = "";
  }

  render() {
    return <div>{map === undefined ? map : ""}</div>;
  }
}
