import React, { Component } from "react";
import "./css/App.css";
import { BaseLayout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomeView,
  AboutView,
  ResourcesView,
  AddResourceView
} from "./containers";
class App extends Component {
  render() {
    return (
      <div className="App page" id="top" style={{ height: "100%" }}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/findresources" component={ResourcesView} />
              <Route path="/aboutus" component={AboutView} />
              <Route path="/addresource" component={AddResourceView} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
