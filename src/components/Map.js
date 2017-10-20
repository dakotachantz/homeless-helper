import React, { Component } from "react";
// import { ReactDOM } from "react";
// import { GoogleApiWrapper } from "google-maps-react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>;
});

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

// export default class Map extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }
//   componentDidMount() {
//     this.loadMap();
//   }
//   loadMap = () => {
//     if (this.props && this.props.google) {
//       // google is available
//       const { google } = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign(
//         {},
//         {
//           center: center,
//           zoom: zoom
//         }
//       );
//       this.map = new maps.Map(node, mapConfig);
//     }
//   };

//   render() {
//     return <div ref="map">Loading map...</div>;
//   }
// }
