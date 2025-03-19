"use client";
import React, { useState, useRef } from "react";
import { useWindowStore } from "@/store/windowStore";
import { TWindow } from "@/windows";
import TrafficLightButtons from "./TrafficLightButtons";

type Props = {
  id: number;
} & TWindow;

const Window = (props: Props) => {
  const {
    id,
    name = "untitled folder",
    children,
    className = "",
    defaultWidth,
    defaultHeight,
  } = props;

  const activateWindow = useWindowStore((state) => state.activateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const stack = useWindowStore((state) => state.stack);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 100,
    y: 40,
  });

  const [dragging, setDragging] = useState(false);

  const [rel, setRel] = useState<{ x: number; y: number } | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  if (!stack.includes(id)) return null;

  return (
    <div
      style={{
        left: position?.x,
        top: position?.y,
        zIndex: stack.indexOf(id) + 10, //id === stack[stack.length - 1] ? 10 : 0,
        width: defaultWidth,
        height: defaultHeight,
      }}
      className={`absolute  text-xs shadow-lg  ${className}`}
      ref={ref}
      onClick={() => {
        if (id !== stack[stack.length - 1]) {
          activateWindow(id);
        }
      }}
    >
      <div className="w-full h-full relative flex flex-col bg-[rgb(35,35,35)] rounded-lg overflow-hidden">
        <div
          className="absolute top-0 w-full h-[40px] shadow-whiteGroovy"
          onMouseDown={(e) => {
            if (id !== stack[stack.length - 1]) {
              activateWindow(id);
            }
            if (e.button !== 0) return;
            setRel({
              x: e.pageX - position.x,
              y: e.pageY - position.y,
            });
            setDragging(true);
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseMove={(e) => {
            if (!dragging || !rel) return;
            setPosition({
              x: e.pageX - rel.x,
              y: e.pageY - rel.y,
            });
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseUp={(e) => {
            setDragging(false);
            e.stopPropagation();
            e.preventDefault();
          }}
          onMouseLeave={(e) => {
            setDragging(false);
            e.stopPropagation();
            e.preventDefault();
          }}
        ></div>
        <div className="w-full h-[40px] bg-[rgb(45,45,45)] bg-opacity-[0.97] blur-lg flex items-center justify-between">
          <div className="flex items-center gap-8 pl-4">
            <TrafficLightButtons
              isActive={id !== stack[stack.length - 1]}
              handleClose={() => closeWindow(id)}
            />

            <p>{name}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Window;
