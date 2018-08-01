import React, { Component } from "react";
import styled from "styled-components";
import background from "./pattern.svg";
import MainInput from "./MainInput";

const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: url(${background}) center;
  background-size: cover;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  font-weight: 200;
  font-family: Helvetica;
  font-size: 2.5rem;
`;

class Main extends Component {
  render() {
    return (
      <MainSection>
        <Title>Enter a City and State</Title>
        <MainInput
          retrieveValue={this.props.retrieveValue}
          history={this.props.history}
        />
      </MainSection>
    );
  }
}

export default Main;
export { Title };
