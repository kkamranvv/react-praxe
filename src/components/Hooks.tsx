import { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="hooks-block">
      <p className="count">Count: {count}</p>
      <button className="btn first" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button className="btn" onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
