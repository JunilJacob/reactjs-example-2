import React, { Component } from "react";

export default class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {val: 10};
  }

  render() {
    return (
      <span >
        <h1>Class Component</h1>
        <h2>Age: {this.props.age}</h2>
        <button onClick={() => this.setState({val: 230})}>Change val</button>
        <h2>States are: {this.state.val}</h2>
      </span>
    );
  }
}