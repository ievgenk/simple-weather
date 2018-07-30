import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "./Main";
import MainInput from "./MainInput";
import { Link } from "react-router-dom";

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

  a {
    text-decoration: none;
    color: inherit;
  }
`;
const InputDiv = styled.div`
  display: flex;
`;

class Header extends Component {
  render() {
    return (
      <MainHeader>
        <NavTitle>
          <Link to="/">Simple Weather</Link>
        </NavTitle>
        <InputDiv>
          <MainInput retrieveValue={this.props.retrieveValue} />
        </InputDiv>
      </MainHeader>
    );
  }
}

export default Header;
