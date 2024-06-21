import React, { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function UserContextSol() {
  const [user, setUser] = useState("Test user");
  
  return (
    <span >
      <h1>User Context</h1>
      <UserContext.Provider value={user}>
        <h1>{`Hello user ${user}`}</h1>
        <Component1 />
      </UserContext.Provider>
    </span>
  );
}

function Component1() {
  return (
    <span >
      <h1>Component 1</h1>
      <Component2 />
    </span>
  );
}

function Component2() {
  const user = useContext(UserContext);
  return (
    <span >
      <h1>Component 2</h1>
      <Component3 />
    </span>
  );
}

function Component3() {
  const user = useContext(UserContext);
  return (
    <span >
      <h1>Component 3</h1>
      <h2>{`Hello user ${user}`}</h2>
    </span>
  );
}