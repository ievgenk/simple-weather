import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "./MainInput";
import HeaderInput from "./HeaderInput";

const MainHeader = styled.header`
  display: flex;
  width: 100vw;
  height: 10%;
  color: white;
  background-color: #ff5a00;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = Title.extend`
  color: white;
  font-weight: bold;
  font-size: 3rem;
  margin-left: 15px;
`;

class Header extends Component {
  render() {
    return (
      <MainHeader>
        <NavTitle>Clever Title</NavTitle>
        <HeaderInput />
      </MainHeader>
    );
  }
}

export default Header;
