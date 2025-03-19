import { type ReactNode } from "react";
import About from "./app/_components/pages/About";
import Skills from "./app/_components/pages/Skills";
import Contacts from "./app/_components/pages/Contacts";
import Cv from "./app/_components/pages/Cv";

export type TWindow = {
  name?: string;
  children?: ReactNode;
  className?: string;
  defaultWidth: number | string;
  defaultHeight: number | string;
};

export const windows: TWindow[] = [
  {
    name: "cv.pdf",
    defaultWidth: "50%",
    defaultHeight: "96%",
    children: <Cv />,
  },
  {
    name: "about.md",
    defaultWidth: "40%",
    defaultHeight: "fit",
    children: <About />,
  },
  {
    name: "skills.md",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Skills />,
  },
  {
    name: "contacts.txt",
    defaultWidth: "300px",
    defaultHeight: "fit",

    children: <Contacts />,
  },
];
