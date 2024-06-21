import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className='mr-10' onClick={increment}>Increment</button>
      <button className='button-red' onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;