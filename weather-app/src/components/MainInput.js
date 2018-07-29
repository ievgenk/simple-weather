import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-weight: 200;
  font-family: Helvetica;
  font-size: 2.5rem;
`;

const Input = styled.input`
  font-size: 2rem;
  margin: 5px;
  border-radius: 5px;
  border: none;
  padding: 8px;
`;

const PrimaryBtn = styled.button`
  color: white;
  background-color: #3ec63e;
  border-radius: 5px;
  border: none;
  font-size: 2rem;
  padding: 8px 15px;
  margin: 10px;
  cursor: pointer;
`;

class MainInput extends Component {
  render() {
    return (
      <React.Fragment>
        <Title>Enter a City and State</Title>
        <Input type="text" placeholder="Portland, Oregon" />
        <PrimaryBtn>Get Weather</PrimaryBtn>
      </React.Fragment>
    );
  }
}

export default MainInput;
export { Title, Input, PrimaryBtn };
