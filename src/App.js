import React, { Component } from "react";
import "./css/App.css";
import { BaseLayout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./containers/HomeView";
import ResourcesView from "./containers/ResourcesView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/findresources" component={ResourcesView} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
