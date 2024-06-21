import React, { useRef } from "react";

export default function Uncontrolled() {
  const usernameRef = useRef();
  const pwdRef = useRef();
  
  const submit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value, pwdRef.current.value);
  };

  return (
    <div>
      <h1>Uncontrolled</h1>
      <label>Username: </label>
      <input type="text" name="username" ref={usernameRef} />
      <br />
      <label>Password: </label>
      <input type="password" name="password" ref={pwdRef} />
      <br />
      <button onClick={submit}>Login</button>
    </div>
  );
}