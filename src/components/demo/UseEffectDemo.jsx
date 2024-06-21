import React, { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [val, setVal] = useState(12);
  const [data, setData] = useState("Text");

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    console.log("component has mounted and updated");
  });

  useEffect(() => {
    console.log("data has mounted and updated");
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("component unmounted");
    } 
  }
  );

  return (
    <span >
      <h1>UseEffect Demo</h1>
      <button onClick={() => setVal(25)}>Change val</button>
      <h2>States are: {val}</h2>
      <button onClick={() => setData("Number")}>Change Data</button>
      <h2>Data: {data}</h2>
    </span>
  );
}