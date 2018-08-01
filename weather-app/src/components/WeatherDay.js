import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";
import queryString from "query-string";

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 18vh;
    width: 18vw;
    margin: 10px;
  }
  h3 {
    text-align: center;
    font-size: 2.5rem;
  }
`;

class WeatherDay extends Component {
  render() {
    return (
      <WeatherContainer>
        <Link
          to={`/detail/${queryString.parse(window.location.search).city}?date=${
            this.props.data.dt
          }`}
        >
          <img src={`/images/weather-icons/${this.props.icon}.svg`} />
        </Link>
        <h3>{moment(this.props.date).format("dddd MMM D")}</h3>
      </WeatherContainer>
    );
  }
}

export default WeatherDay;
