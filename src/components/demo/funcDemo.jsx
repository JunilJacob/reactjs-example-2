import React, { useState } from "react";

export default function FuncDemo(props) {
  const [val, setVal] = useState(10);

  return (
    <span >
      <h1>Functional Component</h1>
      <h2>State: {props.state}</h2>
      <button onClick={() => setVal(230)}>Change val</button>
      <h2>States are: {val}</h2>
    </span>
  );
}