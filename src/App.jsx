import React, { useReducer } from "react";
import Counter from "./components/Counter.jsx";

function initialState() {
  return {
    count: 0,
  };
}

function counterReducer(state = initialState(), action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      if (state.count === 0) return initialState();
      return { count: state.count - 1 };
    case "RESET":
      return initialState();
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState());

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  return (
    <div className="h-screen w-screen bg-zinc-100 flex justify-center items-center flex-col gap-7">
      <header>
        <h1 className="text-2xl uppercase font-bold">Counter</h1>
      </header>
      <Counter
        value={state.count}
        add={increment}
        less={decrement}
        restart={reset}
      ></Counter>
    </div>
  );
}

export default App;
