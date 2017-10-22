import React, { Component } from "react";
import { Mission } from "../components";
export default class MissionView extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/ourmission") {
      let nav = document.querySelector("nav");
      nav.style.backgroundColor = "rgba(27, 27, 27, .7)";
    }
  }
  componentWillUnmount() {
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "transparent";
  }

  render() {
    return <Mission />;
  }
}
