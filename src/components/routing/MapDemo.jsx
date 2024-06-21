import React from "react";

export default function MapDemo() {
  const cars = [
    { color: 'purple', type: "Minivan", registration: new Date("2017-01-01"), capacity: 5 },
    { color: 'red', type: "SUV", registration: new Date("2018-01-01"), capacity: 5 },
    { color: 'blue', type: "Sedan", registration: new Date("2019-01-01"), capacity: 5 },
  ];
  return (
    <div>
      <h1>MapDemo</h1>
      {cars.map((car, index) => (
        <div key={index}>
          <p key={index}>{`${index+1}. ${car.color} ${car.type} which has a capacity of ${car.capacity}, was registered on ${car.registration.toLocaleDateString('en-CA')}`}</p>
        </div>
      ))}
    </div>
  );
}