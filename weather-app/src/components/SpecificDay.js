import React from "react";
import styled from "styled-components";
import queryString from "query-string";
import moment from "moment";

const DailyForecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 25%;
    width: 25%;
    margin: 10px;
  }
  h3 {
    text-align: center;
    font-size: 2.5rem;
  }
`;

const SpecificDay = ({ forecast }) => {
  console.log(queryString.parse(window.location.search).date);
  const queryCheck = queryString.parse(window.location.search).date;
  const currentWeather = forecast.filter(
    weatherForecast => weatherForecast.dt == queryCheck
  );
  console.log(currentWeather);
  return (
    <React.Fragment>
      <DailyForecast>
        <img
          src={`/images/weather-icons/${currentWeather[0].weather[0].icon}.svg`}
        />
        <h3>{moment(currentWeather[0].dt_txt).format("dddd MMM D")}</h3>
        <h3>Temp Min: {currentWeather[0].main.temp_min}</h3>
        <h3>Temp Max: {currentWeather[0].main.temp_max}</h3>
        <h3>Humidity: {currentWeather[0].main.humidity}</h3>
      </DailyForecast>
    </React.Fragment>
  );
};

export default SpecificDay;
