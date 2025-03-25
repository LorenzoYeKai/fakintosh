"use client";
import React from "react";

import { windows } from "@/windows";
import Window from "./Window";
import Finder from "./Finder";
import useResize from "../useResize";

const WindowsSpace = () => {
  const [windowWidth, windowHeight] = useResize();
  return (
    <>
      {windows.map((window, index) => (
        <Window
          id={index}
          {...window}
          key={index}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      ))}
      <Finder windowWidth={windowWidth} windowHeight={windowHeight} />
    </>
  );
};

export default WindowsSpace;
