"use client";
import { useWindowStore, finderId } from "@/store/windowStore";
import React, { useState, useRef } from "react";
import TrafficLightButtons from "./TrafficLightButtons";
import { folders } from "@/folders";
import Folder from "./Folder";
import File from "./File";

const Finder = () => {
  const activateWindow = useWindowStore((state) => state.activateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const stack = useWindowStore((state) => state.stack);
  const finderStack = useWindowStore((state) => state.finderStack);
  const activeFinderIndex = useWindowStore((state) => state.activeFinderIndex);
  const navigateFinder = useWindowStore((state) => state.navigateFinder);

  const [position, setPosition] = useState({
    x: 100,
    y: 20,
  });

  const [dragging, setDragging] = useState(false);

  const [rel, setRel] = useState<{ x: number; y: number } | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  if (!stack.includes(finderId)) return null;

  return (
    <div
      className="absolute w-1/2 h-2/3 shadow-lg"
      style={{
        left: position.x,
        top: position.y,
        zIndex: stack.indexOf(finderId) + 10,
      }}
      ref={ref}
      onClick={() => {
        if (finderId !== stack[stack.length - 1]) {
          activateWindow(finderId);
        }
      }}
    >
      <div className="w-full h-full relative flex rounded-lg overflow-hidden">
        <div
          className="absolute top-0 w-full h-[40px] shadow-whiteGroovy"
          onMouseDown={(e) => {
            if (finderId !== stack[stack.length - 1]) {
              activateWindow(finderId);
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
        <div className="w-[15%] h-full bg-[rgb(35,35,35)] bg-opacity-[0.97] blur-lg p-4 ">
          <TrafficLightButtons
            isActive={finderId !== stack[stack.length - 1]}
            handleClose={() => closeWindow(finderId)}
          />
        </div>
        <div className="w-[85%] h-full bg-[rgb(35,35,35)]">
          <div className="w-full h-[40px] bg-[rgb(45,45,45)] bg-opacity-[0.97] blur-lg flex items-center px-4 gap-4">
            <button
              className="flex justify-center items-center w-4 bg-transparent border-none p-0 cursor-pointer z-10"
              disabled={activeFinderIndex === 1}
              style={{
                opacity: activeFinderIndex === 1 ? 0.5 : 1,
              }}
              onClick={() => navigateFinder(-1)}
            >
              <img src="/svg/leftArrow.svg" className="w-full" />
            </button>
            <button
              className="flex justify-center items-center w-4 bg-transparent border-none p-0 cursor-pointer z-10"
              disabled={activeFinderIndex === finderStack.length - 1}
              style={{
                opacity: activeFinderIndex === finderStack.length - 1 ? 0.5 : 1,
              }}
              onClick={() => navigateFinder(1)}
            >
              <img
                src="/svg/leftArrow.svg"
                className="w-full"
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            </button>
            <p className="text-xs">{finderStack[activeFinderIndex]}</p>
          </div>
          <div className="flex flex-wrap">
            {(folders[finderStack[activeFinderIndex]]
              ? folders[finderStack[activeFinderIndex]]
              : []
            ).map((file, index) => (
              <React.Fragment key={index}>
                {file.type === "file" ? (
                  <File name={file.name} icon={file.icon} id={file.id} />
                ) : (
                  <Folder name={file.name} icon={file.icon} id={file.id} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
