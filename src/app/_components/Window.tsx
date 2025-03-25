"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useWindowStore } from "@/store/windowStore";
import { TWindow } from "@/windows";
import TrafficLightButtons from "./TrafficLightButtons";
import useResize from "../useResize";

type Props = {
  id: number;
  windowWidth: number;
  windowHeight: number;
} & TWindow;

const Window = (props: Props) => {
  const {
    id,
    name = "untitled folder",
    children,
    className = "",
    defaultWidth,
    defaultHeight,
    windowWidth,
    windowHeight,
  } = props;

  const activateWindow = useWindowStore((state) => state.activateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const stack = useWindowStore((state) => state.stack);

  const [rendered, setRedered] = useState(false);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const [rel, setRel] = useState<{ x: number; y: number } | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    setRedered(true);
    if (ref.current) {
      setPosition({
        x: Math.round(windowWidth / 2) - ref.current.clientWidth / 2,
        y: Math.round(windowHeight / 2) - ref.current.clientHeight / 2,
      });
    }
  }, [windowWidth, windowHeight, ref]);

  if (!stack.includes(id)) return null;

  return (
    <div
      style={{
        left:
          windowWidth <= 768 || windowWidth / windowHeight <= 0.8
            ? 0
            : position?.x,
        top:
          windowWidth <= 768 || windowWidth / windowHeight <= 0.8
            ? 20
            : position?.y,
        zIndex: stack.indexOf(id) + 10,
        display: rendered ? " block" : "none",
        maxHeight: "calc(100svh - 20px)",
        width: windowWidth <= 768 ? "100%" : defaultWidth,
        height: windowWidth <= 768 ? "100%" : defaultHeight,
      }}
      className={`absolute md:text-xs shadow-lg ${className}`}
      ref={ref}
      onClick={() => {
        if (id !== stack[stack.length - 1]) {
          activateWindow(id);
        }
      }}
    >
      <div className="w-full h-full relative flex flex-col bg-[rgb(35,35,35)] rounded-lg overflow-hidden">
        <div
          className="absolute top-0 w-full h-[40px] shadow-whiteGroovy hidden md:block"
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
