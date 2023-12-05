import React from "react";
import { CounterStyleClass } from "./StyleClass.jsx";

function Counter({ value, add, less, restart }) {
  const style = CounterStyleClass();

  return (
    <>
      <main className={style.counterContainer}>
        <section className={style.valueContainer}>
          <p
            className={style.counterValueCurrent}
            style={{ wordBreak: "break-word" }}
          >
            {value}
          </p>
        </section>
        <footer className={style.buttonsContainer}>
          <button onClick={add} className={style.buttonAdd}>
            +
          </button>
          <button onClick={restart} className={style.buttonReset}>
            reset
          </button>
          <button onClick={less} className={style.buttonLess}>
            -
          </button>
        </footer>
      </main>
    </>
  );
}

export default Counter;
