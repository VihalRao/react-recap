import React, { useState, useEffect, useContext } from "react";
import { userContext } from "./App";

function Hooks() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Child />
    </div>
  );
}

const Child = () => {
  const x = useContext(userContext);
  return (
    <div>
      <h3>{x}</h3>
    </div>
  );
};

export default Hooks;
