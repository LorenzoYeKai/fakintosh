import React from "react";

import { windows } from "@/windows";
import Window from "./Window";
import Finder from "./Finder";

const WindowsSpace = () => {
  return (
    <>
      {windows.map((window, index) => (
        <Window id={index} {...window} key={index} />
      ))}
      <Finder />
    </>
  );
};

export default WindowsSpace;
