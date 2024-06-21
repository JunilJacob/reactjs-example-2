import React, { Component } from "react";

export default class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 10};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return {data: props.color};
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Before the update, the state was: " + prevState.data);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <span >
        <h1>Class Component</h1>
        <button onClick={() => this.setState({data: 230})}>Change val</button>
      </span>
    );
  }
}