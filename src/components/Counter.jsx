import React from "react";

function Counter({ value, add, less, restart }) {
  return (
    <>
      <main className="flex justify-center items-center flex-col w-96 bg-black text-white rounded-md h-60 overflow-hidden shadow-2xl">
        <section className="mb-2 w-full text-center">
          <p className="text-6xl" style={{ wordBreak: "break-word" }}>
            {value}
          </p>
        </section>
        <footer className="flex gap-1">
          <button
            onClick={add}
            className="py-1 px-3 bg-blue-700 w-10 rounded font-semibold text-xl active:bg-blue-500"
          >
            +
          </button>
          <button
            onClick={restart}
            className="bg-slate-500 py-1 px-2 rounded font-semibold text-xl uppercase"
          >
            reset
          </button>
          <button
            onClick={less}
            className="bg-red-700 py-1 px-3 w-10 rounded font-semibold text-xl active:bg-red-500"
          >
            -
          </button>
        </footer>
      </main>
    </>
  );
}

export default Counter;
