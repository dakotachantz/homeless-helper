import React, { Component } from "react";
import { ResourcesList } from "../components";
export default class ResourcesView extends Component {
  componentDidMount() {
    this.changeNavColor();
  }

  changeNavColor = () => {
    console.log(this.props.location.pathname);
  };

  render() {
    return <ResourcesList />;
  }
}
