"use client";
import React, { useState, useRef, useEffect } from "react";
import { useWindowStore } from "@/store/windowStore";

type Props = {
  id: number;
  name?: string;
  icon?: string;
  link?: string;
  textColor?: string;
};

const File = (props: Props) => {
  const {
    id,
    name = "untitled file.txt",
    icon = "/images/txt.png",
    link,
    textColor,
  } = props;
  const [clicked, setClicked] = useState(false);
  const folderRef = useRef<HTMLDivElement>(null);
  const openWindow = useWindowStore((state) => state.openWindow);

  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (
        folderRef.current &&
        !folderRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center gap-[2px] cursor-pointer w-[96px]"
      onClick={() => setClicked(true)}
      onDoubleClick={() => {
        if (link) {
          window.open(link, "_blank");
          return;
        }
        openWindow(id);
      }}
      ref={folderRef}
      onTouchStart={() => {
        if (link) {
          window.open(link, "_blank");
          return;
        }
        openWindow(id);
      }}
    >
      <img
        src={icon}
        className="w-[52px] p-1 rounded-sm pointer-events-none select-none"
        style={{
          border: clicked
            ? "2px rgba(255,255,255,0.5) solid"
            : "2px transparent solid",
          backgroundColor: clicked ? "rgba(0,0,0,0.3)" : "transparent",
        }}
        alt="icon"
      />
      <p
        className="text-xs text-center font-semibold leading-3 line-clamp-3 text-ellipsis break-words max-w-[96px] py-[2px] px-1 rounded-sm "
        style={{
          backgroundColor: clicked ? "rgb(30, 75, 190)" : "transparent",
          color: textColor,
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default File;
