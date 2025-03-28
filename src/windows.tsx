import { type ReactNode } from "react";
import About from "./app/_components/pages/About";
import Skills from "./app/_components/pages/Skills";
import Contacts from "./app/_components/pages/Contacts";
import Cv from "./app/_components/pages/Cv";
import Music from "./app/_components/pages/Music";
import MusicReadme from "./app/_components/pages/MusicReadme";
import Video from "./app/_components/pages/Video";
import VideoReadme from "./app/_components/pages/VideoReadme";
import GameOfLife from "./app/_components/pages/GameOfLife";
import Calc from "./app/_components/pages/Calc";
import Asq from "./app/_components/pages/Asq";
import Tanuki from "./app/_components/pages/Tanuki";
import Std from "./app/_components/pages/Std";
import GraveyardReadme from "./app/_components/pages/GraveyardReadme";
import RepBase from "./app/_components/pages/RepBase";

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
  {
    name: "Merry-Go-Round of Life.mp3",
    defaultWidth: "fit",
    defaultHeight: "fit",
    children: (
      <Music
        title="Merry-Go-Round of Life"
        composer="Joe Hisaishi"
        videoId="f7SS57LFPco"
      />
    ),
    // 7
  },
  {
    name: "readme.mp3",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <MusicReadme />,
    // 8
  },
  {
    name: "Engineers turn dreams into reality.mp4",
    defaultWidth: "30%",
    defaultHeight: "fit",
    children: <Video videoId="gWI1d891COE" />,
    // 9
  },
  {
    name: "Running Away.mp4",
    defaultWidth: "30%",
    defaultHeight: "fit",
    children: <Video videoId="Jtc-PP2GWPo" />,
    // 10
  },
  {
    name: "Do Chairs Exist?.mp4",
    defaultWidth: "30%",
    defaultHeight: "fit",
    children: <Video videoId="fXW-QjBsruE" />,
    // 11
  },
  {
    name: "The transformative power of classical music.mp4",
    defaultWidth: "30%",
    defaultHeight: "fit",
    children: <Video videoId="r9LCwI5iErE" />,
    // 12
  },
  {
    name: "You've been rick rolled HAHA.mp4",
    defaultWidth: "30%",
    defaultHeight: "fit",
    children: <Video videoId="dQw4w9WgXcQ" />,
    // 13
  },
  {
    name: "readme.mp3",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <VideoReadme />,
    // 14
  },
  {
    name: "game of life.app",
    defaultWidth: "fit",
    defaultHeight: "60%",
    children: <GameOfLife />,
    // 15
  },
  {
    name: "Calcisticamente Parlando",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Calc />,
    // 16
  },
  {
    name: "Anime Song Quiz",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Asq />,
    // 17
  },
  {
    name: "Save The Day",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Std />,
    // 18
  },
  {
    name: "Tanuki Pay",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <Tanuki />,
    // 19
  },
  {
    name: "readme.md",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <GraveyardReadme />,
    // 20
  },
  {
    name: "RepBase",
    defaultWidth: "40%",
    defaultHeight: "60%",
    children: <RepBase />,
    // 21
  },
];
