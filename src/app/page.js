"use client";
import { useState } from "react";
import Main from "./component/main";

export default function HomePage() {
  const [flip, setflip] = useState(false);
  function toggle() {
    setflip(true);
  }
  return (
    <div>
      {flip === true ? (
        <Main />
      ) : (
        <button
          onClick={toggle}
          className="bg-white w-full h-screen flex items-center flex-col justify-center"
        >
          <img src="https://www.zttw.store/cdn/shop/files/ZTTW_NEW_LOGO_PNG.png?v=1719231773&width=140" />
          <h1 className="mt-10 font-medium font-mono animate-bounce">Click To Explore</h1>
        </button>
      )}
    </div>
  );
}
