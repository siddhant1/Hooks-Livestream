import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [Ncount, NsetCount] = useState(0);
  useEffect(
    () => {
      console.log("count changes");
      document.title = count;
      return function() {
        console.log("I am componentWillUnmount");
      };
    },
    [count, Ncount]
  );
  return (
    <>
      Old Count
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
        {count}
      </div>
      <br />
      New Count here
      <div>
        <button onClick={() => NsetCount(Ncount + 1)}>Add</button>
        <button onClick={() => NsetCount(Ncount - 1)}>Subtract</button>
        {Ncount}
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
