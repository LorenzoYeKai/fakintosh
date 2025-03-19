export type TFolder = {
  type: "folder" | "file";
  id: number;
  name: string;
  icon: string;
}[];

export const folders: {
  [key: string]: TFolder;
} = {
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
};
