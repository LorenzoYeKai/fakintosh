"use client";
import React, { useState, useRef, useEffect } from "react";
import { useWindowStore } from "@/store/windowStore";
import { getWindowPath } from "@/lib/site";

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
  const folderRef = useRef<HTMLAnchorElement>(null);
  const openWindow = useWindowStore((state) => state.openWindow);
  const href = link ?? getWindowPath(id);

  const openFile = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }
    openWindow(id);
  };

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
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      role={href ? undefined : "button"}
      tabIndex={0}
      style={{ textDecoration: "none", color: "inherit" }}
      className="flex flex-col justify-center items-center gap-[2px] cursor-pointer w-[96px]"
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        setClicked(true);
      }}
      onDoubleClick={openFile}
      ref={folderRef}
      onTouchStart={openFile}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openFile();
        }
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
        alt=""
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
    </a>
  );
};

export default File;
