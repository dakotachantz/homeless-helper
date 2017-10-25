import React, { Component } from "react";
import { AddResource } from "../components";
export default class AddResourcesView extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/addresource") {
      let nav = document.querySelector("nav");
      nav.style.backgroundColor = "rgba(27, 27, 27, .7)";
    }
  }
  componentWillUnmount() {
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "transparent";
  }
  render() {
    return <AddResource />;
  }
}
