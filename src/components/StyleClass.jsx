import React from "react";

export function AppStyleClass() {
  return {
    mainContainer:
      "h-screen w-screen bg-zinc-100 flex justify-center items-center flex-col gap-7",
    projectTitle: "text-2xl uppercase font-bold",
  };
}

export function CounterStyleClass() {
  return {
    counterContainer:
      "flex justify-center items-center flex-col w-96 bg-black text-white rounded-md h-60 overflow-hidden shadow-2xl",
    valueContainer: "mb-2 w-full text-center",
    counterValueCurrent: "text-6xl",
    buttonsContainer: "flex gap-1",
    buttonAdd:
      "py-1 px-3 bg-blue-700 w-10 rounded font-semibold text-xl active:bg-blue-500",
    buttonReset:
      "bg-slate-500 py-1 px-2 rounded font-semibold text-xl uppercase",
    buttonLess:
      "bg-red-700 py-1 px-3 w-10 rounded font-semibold text-xl active:bg-red-500",
  };
}
