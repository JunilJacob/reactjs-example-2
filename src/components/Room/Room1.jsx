import React, { Component } from "react";

export default class Room1 extends Component {
  constructor(props) {
    super(props);
    this.state = {carPrice: 5000, bikePrice: 3000};
  }

  render() {
    return (
      <span >
        <h1>Class Component</h1>
        <h2>Car: {this.props.car}</h2>
        <h2>Bike: {this.props.bike}</h2>
        <button onClick={() => this.setState({carPrice: 10000})}>Change car price</button>
        <h2>Car price is: {this.state.carPrice}</h2>
        <button onClick={() => this.setState({bikePrice: 6000})}>Change bike price</button>
        <h2>Bike price is: {this.state.bikePrice}</h2>

      </span>
    );
  }
}