import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import NotFound from "./NotFound";
import Forecast from "./Forecast";
import SpecificDay from "./SpecificDay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    cityName: ""
  };

  navigateToForecast = () => {
    this.props.history.push(`/forecast?city=${this.state.cityName}`);
  };

  retrieveValue = val => {
    this.setState(() => ({ cityName: val }));
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route
            path="/"
            render={props => (
              <Header {...props} retrieveValue={this.retrieveValue} />
            )}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Main {...props} retrieveValue={this.retrieveValue} />
              )}
            />
            <Route path="/forecast" component={Forecast} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
