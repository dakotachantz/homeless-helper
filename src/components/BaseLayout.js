import React, { Component } from "react";
import { NavBar, Footer } from "../components";
export default class BaseLayout extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <div className="main-content">{this.props.children}</div>
        <Footer />
      </main>
    );
  }
}
