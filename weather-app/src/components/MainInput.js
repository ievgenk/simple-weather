import React, { Component } from "react";
import styled from "styled-components";

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
  state = {
    inputValue: ""
  };

  handleChange = event => {
    event.persist();
    this.setState(() => ({ inputValue: event.target.value }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.retrieveValue(this.state.inputValue);
    this.setState(() => ({ inputValue: "" }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          type="text"
          value={this.state.inputValue}
          placeholder="Portland, Oregon"
        />
        <PrimaryBtn type="submit">Get Weather</PrimaryBtn>
      </form>
    );
  }
}

export default MainInput;
export { Input, PrimaryBtn };
