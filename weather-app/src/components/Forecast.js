import React, { Component } from "react";
import queryString from "query-string";
import styled from "styled-components";
import WeatherDay from "./WeatherDay";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SpecificDay from "./SpecificDay";

const ForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CityName = styled.h1`
  font-weight: 200;
  font-size: 6rem;
  text-align: center;
`;

class Forecast extends Component {
  state = {
    loading: true,
    apiKey: "06118f89ca55374e18df7a4a6958034f",
    forecast: []
  };

  componentDidMount() {
    // return fetch(
    //   `http://api.openweathermap.org/data/2.5/weather?q=${
    //     this.state.cityName
    //   }&type=accurate&APPID=${this.state.apiKey}&units=metric`
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${
        queryString.parse(window.location.search).city
      }&APPID=${this.state.apiKey}&units=metric`
    )
      .then(response => response.json())
      .then(data => {
        this.setState(() => ({ loading: false, forecast: data.list }));
      });
  }

  componentDidUpdate() {
    if (queryString.parse(window.location.search).city) {
      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${
          queryString.parse(window.location.search).city
        }&APPID=${this.state.apiKey}&units=metric`
      )
        .then(response => response.json())
        .then(data => {
          this.setState(() => ({ loading: false, forecast: data.list }));
        });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <React.Fragment>
        <CityName>{queryString.parse(window.location.search).city}</CityName>
        <Router>
          <Switch>
            <Route
              path="/forecast"
              render={() => (
                <ForecastContainer>
                  {this.state.forecast.map(day => {
                    if (day.dt_txt.includes("12:00:00")) {
                      return (
                        <WeatherDay
                          icon={day.weather[0].icon}
                          date={day.dt_txt}
                          data={day}
                        />
                      );
                    }
                  })}
                </ForecastContainer>
              )}
            />
            <Route
              path="/detail"
              render={props => (
                <SpecificDay {...props} forecast={this.state.forecast} />
              )}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Forecast;
