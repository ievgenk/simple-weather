import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    cityName: "",
    apiKey: "06118f89ca55374e18df7a4a6958034f"
  };

  componentDidUpdate() {
    // return fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${
    //     this.state.cityName
    //   }&type=accurate&APPID=${this.state.apiKey}&units=metric`
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.state.cityName
      }&APPID=${this.state.apiKey}&units=metric&cnt=5`
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  retrieveValue = val => {
    this.setState(() => ({ cityName: val }));
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header retrieveValue={this.retrieveValue} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Main {...props} retrieveValue={this.retrieveValue} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
