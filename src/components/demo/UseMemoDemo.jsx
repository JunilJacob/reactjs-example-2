import React, { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < count*100000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Demo</h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <h2>{count}</h2>
      <button onClick={() => setData(data + 1)}>Increment data</button>
      <h2>{data}</h2>
      <h2>expensiveCalculation : {expensiveCalculation}</h2>
    </div>
  );
}
