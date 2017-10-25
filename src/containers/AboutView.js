import React, { Component } from "react";
import { About } from "../components";
export default class MissionView extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/aboutus") {
      let nav = document.querySelector("nav");
      nav.style.backgroundColor = "rgba(27, 27, 27, .7)";
    }
  }
  componentWillUnmount() {
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "transparent";
  }

  render() {
    return <About />;
  }
}
