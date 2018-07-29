import React, { Component } from "react";
import styled from "styled-components";
import { Input, PrimaryBtn } from "./MainInput";

const InputDiv = styled.div`
  display: flex;
`;

class HeaderInput extends Component {
  render() {
    return (
      <InputDiv>
        <Input type="text" placeholder="Portland, Oregon" />
        <PrimaryBtn>Get Weather</PrimaryBtn>
      </InputDiv>
    );
  }
}

export default HeaderInput;
