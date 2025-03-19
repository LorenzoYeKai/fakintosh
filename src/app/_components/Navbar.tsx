import React from "react";
import Clock from "./Clock";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[rgb(100,100,100)] bg-opacity-70  blur-3xl py-1 px-4 text-xs font-semibold leading-3">
      <div className="flex items-center gap-4">
        <img src="./svg/apple.svg" className="w-3 h-3" />
        <p className="font-bold">Lorenzo Ye</p>
      </div>
      <div className="flex items-center gap-4">
        <Clock />
      </div>
    </div>
  );
};

export default Navbar;
