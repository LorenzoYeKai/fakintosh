export type TFolder = {
  type: "folder" | "file";
  id: number;
  name: string;
  icon: string;
  link?: string;
}[];

export const folders: {
  [key: string]: TFolder;
} = {
  "Lorenzo's Fake mini": [
    {
      type: "folder",
      name: "Fakintosh HD",
      id: -1,
      icon: "/images/macintosh.png",
    },
  ],
  "Fakintosh HD": [
    {
      type: "folder",
      name: "Applications",
      id: -1,
      icon: "/images/folder.png",
    },
    {
      type: "folder",
      name: "Users",
      id: -1,
      icon: "/images/folder.png",
    },
  ],
  Users: [
    {
      type: "folder",
      name: "lorenzo",
      id: -1,
      icon: "/images/folder.png",
    },
  ],
  lorenzo: [
    {
      type: "folder",
      name: "music",
      id: -1,
      icon: "/images/folder.png",
    },
    {
      type: "folder",
      name: "movies",
      id: -1,
      icon: "/images/folder.png",
    },
    {
      type: "folder",
      name: "desktop",
      id: -1,
      icon: "/images/folder.png",
    },
  ],
  desktop: [
    {
      type: "file",
      name: "cv.pdf",
      id: 0,
      icon: "/images/cvIcon.png",
    },
    {
      type: "file",
      name: "about.md",
      id: 1,
      icon: "/images/defaultFile.png",
    },
    {
      type: "file",
      name: "skills.md",
      id: 2,
      icon: "/images/defaultFile.png",
    },
    {
      type: "file",
      name: "contacts.txt",
      id: 3,
      icon: "/images/txt.png",
    },
  ],
  music: [
    {
      type: "file",
      name: "Goldberg Variations.mp3",
      id: 4,
      icon: "/images/mp3.png",
    },
    {
      type: "file",
      name: "Beneath the Mask.mp3",
      id: 5,
      icon: "/images/mp3.png",
    },
    {
      type: "file",
      name: "Littleroot Town.mp3",
      id: 6,
      icon: "/images/mp3.png",
    },
    {
      type: "file",
      name: "Merry-Go-Round of Life.mp3",
      id: 7,
      icon: "/images/mp3.png",
    },
    {
      type: "file",
      name: "readme.md",
      id: 8,
      icon: "/images/defaultFile.png",
    },
  ],
  movies: [
    {
      type: "file",
      name: "Engineers turn dreams into reality.mp4",
      id: 9,
      icon: "/images/caproni.png",
    },
    {
      type: "file",
      name: "Running Away.mp4",
      id: 10,
      icon: "/images/run.png",
    },
    {
      type: "file",
      name: "Do Chairs Exist?.mp4",
      id: 11,
      icon: "/images/chair.jpg",
    },
    {
      type: "file",
      name: "The transformative power of classical music.mp4",
      id: 12,
      icon: "/images/ted.jpg",
    },
    {
      type: "file",
      name: "Into the Void - The Meaning of White.mp4",
      id: 13,
      icon: "/images/white.jpg",
    },
    {
      type: "file",
      name: "readme.md",
      id: 14,
      icon: "/images/defaultFile.png",
    },
  ],
  Applications: [
    {
      type: "file",
      name: "ninfa.app",
      id: -2,
      icon: "/images/ninfa.jpg",
      link: "https://ninfa.io",
    },
  ],
};

export const sideBarButtons = [
  {
    folder: "Applications",
    icon: "/images/appsGlyph.png",
  },
  {
    folder: "music",
    icon: "/images/musicGlyph.png",
  },
  {
    folder: "movies",
    icon: "/images/moviesGlyph.png",
  },
  {
    folder: "desktop",
    icon: "/images/desktopGlyph.png",
  },
];
