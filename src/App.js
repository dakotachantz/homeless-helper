import React, { Component } from "react";
import "./css/App.css";
import { BaseLayout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView, MissionView, ResourcesView } from "./containers";
class App extends Component {
  render() {
    return (
      <div className="App page" id="top" style={{ height: "100%" }}>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/findresources" component={ResourcesView} />
              <Route path="/ourmission" component={MissionView} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
