import React, { useState } from "react";
import Counter from "./components/Counter.jsx";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return count;
    return setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="h-screen w-screen bg-zinc-100 flex justify-center items-center flex-col gap-7">
      <header>
        <h1 className="text-2xl uppercase font-bold">Counter</h1>
      </header>
      <Counter
        value={count}
        add={increment}
        less={decrement}
        restart={reset}
      ></Counter>
    </div>
  );
}

export default App;
