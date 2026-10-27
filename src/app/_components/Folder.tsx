"use client";
import React, { useState, useRef, useEffect } from "react";
import { useWindowStore } from "@/store/windowStore";
import { getFolderPath } from "@/lib/site";

type Props = {
  id: number;
  name?: string;
  icon?: string;
  textColor?: string;
};

const Folder = (props: Props) => {
  const {
    name = "untitled folder",
    icon = "/images/folder.png",
    textColor,
  } = props;
  const [clicked, setClicked] = useState(false);
  const folderRef = useRef<HTMLAnchorElement>(null);
  const href = getFolderPath(name);

  const setFinderPath = useWindowStore((state) => state.setFinderPath);

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
    <a
      href={href}
      role={href ? undefined : "button"}
      tabIndex={0}
      style={{ textDecoration: "none", color: "inherit" }}
      className="flex flex-col justify-center items-center gap-[2px] cursor-pointer w-[96px] h-[96px]"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        setClicked(true);
      }}
      onDoubleClick={() => setFinderPath(name)}
      onTouchStart={() => setFinderPath(name)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFinderPath(name);
        }
      }}
      ref={folderRef}
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
        alt=""
      />
      <p
        className="text-xs text-center font-semibold leading-3 line-clamp-2 text-ellipsis break-words max-w-[96px] py-[2px] px-1 rounded-sm "
        style={{
          backgroundColor: clicked ? "rgb(30, 75, 190)" : "transparent",
          color: clicked ? "#ffffff" : textColor,
        }}
      >
        {name}
      </p>
    </a>
  );
};

export default Folder;
