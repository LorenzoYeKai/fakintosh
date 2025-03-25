import { type ReactNode } from "react";
import About from "./app/_components/pages/About";
import Skills from "./app/_components/pages/Skills";
import Contacts from "./app/_components/pages/Contacts";
import Cv from "./app/_components/pages/Cv";
import Music from "./app/_components/pages/Music";

export type TWindow = {
  name?: string;
  children?: ReactNode;
  className?: string;
  defaultWidth: string;
  defaultHeight: string;
};

export const windows: TWindow[] = [
  {
    name: "cv.pdf",
    defaultWidth: "50%",
    defaultHeight: "96%",
    children: <Cv />,
    // 0
  },
  {
    name: "about.md",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <About />,
    // 1
  },
  {
    name: "skills.md",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Skills />,
    // 2
  },
  {
    name: "contacts.txt",
    defaultWidth: "300px",
    defaultHeight: "fit",
    children: <Contacts />,
    // 3
  },
  {
    name: "Goldberg Variations.mp3",
    defaultWidth: "fit",
    defaultHeight: "fit",
    children: (
      <Music
        title="BWV 988 Goldberg Variations"
        composer="JS Bach"
        artist="András Schiff"
        videoId="MHFuaaGpGKQ"
      />
    ),
    // 4
  },
  {
    name: "Beneath the Mask.mp3",
    defaultWidth: "fit",
    defaultHeight: "fit",
    children: (
      <Music
        title="Beneath the Mask (instrumental)"
        composer="Lyn"
        videoId="w7Cm74nDhac"
      />
    ),
    // 5
  },
  {
    name: "Littleroot Town.mp3",
    defaultWidth: "fit",
    defaultHeight: "fit",
    children: (
      <Music
        title="Littleroot Town"
        composer="Junichi Masuda"
        videoId="im6tbN9SZXs"
      />
    ),
    // 6
  },
];
