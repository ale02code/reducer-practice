import React, { useReducer } from "react";
import Counter from "./components/Counter.jsx";
import { AppStyleClass } from "./components/StyleClass.jsx";

function initialState() {
  return {
    count: 0,
  };
}

function counterReducer(state = initialState(), action) {
  // * this case i used switch
  // switch (action.type) {
  //   case "INCREMENT":
  //     return { count: state.count + 1 };
  //   case "DECREMENT":
  //     if (state.count === 0) return initialState();
  //     return { count: state.count - 1 };
  //   case "RESET":
  //     return initialState();
  // }

  // * this case i used if
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    if (state.count === 0) return initialState();
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return initialState();
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState());

  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });

  const { mainContainer, projectTitle } = AppStyleClass();

  return (
    <div className={mainContainer}>
      <header>
        <h1 className={projectTitle}>Counter</h1>
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
