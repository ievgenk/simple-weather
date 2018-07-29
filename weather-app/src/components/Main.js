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

class Main extends Component {
  render() {
    return (
      <MainSection>
        <MainInput />
      </MainSection>
    );
  }
}

export default Main;
