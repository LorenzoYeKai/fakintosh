"use client";
import React from "react";
import { useWindowStore } from "@/store/windowStore";

const Cv = () => {
  const activateWindow = useWindowStore((state) => state.activateWindow);
  const stack = useWindowStore((state) => state.stack);
  return (
    <div className="w-full h-full relative">
      {0 !== stack[stack.length - 1] ? (
        <div
          className="absolute w-full h-full top-0 left-0"
          onClick={() => {
            activateWindow(0);
          }}
        />
      ) : null}
      <object
        data="/pdf/cv.pdf"
        type="application/pdf"
        className="w-full h-full"
      />
    </div>
  );
};

export default Cv;
