"use client";
import { useWindowStore, finderId } from "@/store/windowStore";
import React, { useState, useRef, useLayoutEffect } from "react";
import TrafficLightButtons from "./TrafficLightButtons";
import { folders, sideBarButtons } from "@/folders";
import Folder from "./Folder";
import File from "./File";
import FinderSidebarButton from "./FinderSidebarButton";

type Props = {
  windowWidth: number;
  windowHeight: number;
};

const Finder = (props: Props) => {
  const { windowWidth, windowHeight } = props;

  const activateWindow = useWindowStore((state) => state.activateWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const stack = useWindowStore((state) => state.stack);
  const finderStack = useWindowStore((state) => state.finderStack);
  const activeFinderIndex = useWindowStore((state) => state.activeFinderIndex);
  const navigateFinder = useWindowStore((state) => state.navigateFinder);
  const setFinderPath = useWindowStore((state) => state.setFinderPath);

  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [rendered, setRedered] = useState(false);

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

  if (!stack.includes(finderId)) return null;

  return (
    <div
      className="absolute w-full h-full md:w-1/2 md:h-2/3 shadow-lg"
      style={{
        left:
          windowWidth <= 768 || windowWidth / windowHeight <= 0.8
            ? 0
            : position?.x,
        top:
          windowWidth <= 768 || windowWidth / windowHeight <= 0.8
            ? 20
            : position?.y,
        zIndex: stack.indexOf(finderId) + 10,
        display: rendered ? " block" : "none",
        maxHeight: "calc(100svh - 20px)",
      }}
      ref={ref}
      onClick={() => {
        if (finderId !== stack[stack.length - 1]) {
          activateWindow(finderId);
        }
      }}
    >
      <div className="w-full h-full relative flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div
          className="absolute top-0 w-full h-[40px] shadow-whiteGroovy hidden md:block"
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
        <div className="w-full md:w-[15%] md:h-full bg-dragbar bg-opacity-[0.97] blur-lg p-4 ">
          <TrafficLightButtons
            isActive={finderId !== stack[stack.length - 1]}
            handleClose={() => closeWindow(finderId)}
          />
          <div className="hidden md:flex flex-col gap-2 mt-8">
            <p className="text-[10px] opacity-50">Favourites</p>
            {sideBarButtons.map((b, index) => (
              <FinderSidebarButton
                folder={b.folder}
                icon={b.icon}
                isActive={finderStack[activeFinderIndex] === b.folder}
                onClick={() => {
                  if (finderStack[activeFinderIndex] !== b.folder) {
                    setFinderPath(b.folder);
                  }
                }}
                key={index}
              />
            ))}
          </div>
          <div className="hidden md:flex flex-col gap-2 mt-8">
            <p className="text-[10px] opacity-50">Locations</p>
            <FinderSidebarButton
              folder="Lorenzo's Fake mini"
              icon="/images/macGlyph.png"
              isActive={
                finderStack[activeFinderIndex] === "Lorenzo's Fake mini"
              }
              onClick={() => {
                if (finderStack[activeFinderIndex] !== "Lorenzo's Fake mini") {
                  setFinderPath("Lorenzo's Fake mini");
                }
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-[85%] h-full bg-dragbar">
          <div className="w-full h-[40px] bg-windowbg bg-opacity-[0.97] blur-lg flex items-center px-4 gap-4">
            <button
              className="flex justify-center items-center w-4 bg-transparent border-none p-0 cursor-pointer z-10"
              disabled={activeFinderIndex === 0}
              style={{
                opacity: activeFinderIndex === 0 ? 0.5 : 1,
              }}
              onClick={() => navigateFinder(-1)}
            >
              <img
                src="/svg/leftArrow.svg"
                className="w-full invert filter"
                alt="arrow"
                id="svg"
              />
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
                id="svg"
                style={{
                  transform: "rotate(180deg)",
                }}
                alt="arrow"
              />
            </button>
            <p className="text-xs">{finderStack[activeFinderIndex]}</p>
          </div>
          <div className="flex flex-wrap p-4 items-center">
            {(folders[finderStack[activeFinderIndex]]
              ? folders[finderStack[activeFinderIndex]]
              : []
            ).map((file, index) => (
              <React.Fragment key={index}>
                {file.type === "file" ? (
                  <File
                    name={file.name}
                    icon={file.icon}
                    id={file.id}
                    link={file.link}
                  />
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
