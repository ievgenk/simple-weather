import React, { Component } from "react";
import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  width: 100%;
  height: 15vh;
  color: black;
  background-color: moccasin;
`;

class Header extends Component {
  render() {
    return (
      <MainHeader>
        <h1>Main.js Header</h1>
      </MainHeader>
    );
  }
}

export default Header;
