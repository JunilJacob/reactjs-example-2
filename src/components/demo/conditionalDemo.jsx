import React, { useState } from "react";

export default function ConditionalDemo(props) {
  const [show, setShow] = useState(true);

  return (
    <span >
      <h1>Conditional Demo</h1>
      <h2>State: {props.state}</h2>
      <button onClick={() => setShow(!show)}>Change show</button>
      <h2>{show ? "Hello User": ""}</h2>
    </span>
  );
}