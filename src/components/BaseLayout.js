import React, { Component } from "react";
import { NavBar, Footer } from "../components";
export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
