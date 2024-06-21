import React from "react";

export default function Room2(props) {
  const [carSpeed, setCarSpeed] = React.useState(500);
  const [bikeSpeed, setBikeSpeed] = React.useState(100);

  return (
    <span>
      <h1>Functional Component</h1>
      <h2>Car: {props.car}</h2>
      <h2>Bike: {props.bike}</h2>
      <h2>Car speed: {carSpeed}</h2>
      <button onClick={() => setCarSpeed(1000)}>Change car speed</button>
      <h2>Bike speed: {bikeSpeed}</h2>
      <button onClick={() => setBikeSpeed(200)}>Change bike speed</button>
    </span>
  );
}