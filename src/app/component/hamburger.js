"use client";
import { useState } from "react";

export default function Ham({ build }) {
  const [extra, setExtra] = useState(false);

  function openExtra() {
    setExtra(true);
  }
  function closeExtra() {
    setExtra(false);
  }

  return (
    <div className="fixed flex flex-col h-screen left-0 top-0 w-[90%] bg-white p-2 z-30">
      <button
        onClick={build}
        className=" flex self-end text-[23px] p-4.5 font-extralight"
      >
        X
      </button>

      <div className=" flex flex-col gap-4 p-2">
        {extra ? (
          <div  className=" flex flex-col bg-white">
            <div className="flex flex-row justify-between items-center"> <h1>shop</h1><h1 onClick={closeExtra} className="flex flex-row self-end font-extralight text-4xl">-</h1></div>
            <div>
              <h1>Hoodies</h1>
              <h1>Hats</h1>
              <h1>T-shirts</h1>
              <h1>sweatshirt</h1>
              <h1>shirts</h1>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <h1>shop</h1>
            <button onClick={openExtra} className="text-4xl font-extralight relative">+</button>
          </div>
        )}
        <h1>All products</h1>
        <h1>collections</h1>
        <h1>Look book</h1>
        <h1>About</h1>
      </div>
    </div>
  );
}
