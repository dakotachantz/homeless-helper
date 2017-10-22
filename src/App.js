import React, { Component } from "react";
import "./css/App.css";
import { BaseLayout } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeView, MissionView, ResourcesView } from "./containers";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    axios
      .get("https://data.nashville.gov/resource/8zc7-2afq.json")
      .then(response => {
        console.log(response.data);
        let data = response.data;
        console.log("this.state ", this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App page" id="top">
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
