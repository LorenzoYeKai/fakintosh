export const site = {
  url: "https://www.lorenzoye.com",
  name: "Lorenzo's desktop",
  owner: "Lorenzo Ye",
  title: "Lorenzo Ye | Software engineer & builder",
  description:
    "Explore Lorenzo Ye's interactive desktop portfolio, with software projects, skills, a CV, and contact information.",
};

type PortfolioPage = {
  path: string;
  title: string;
  description: string;
  windowId?: number;
  folder?: string;
  schemaType: "ProfilePage" | "WebPage" | "ContactPage" | "CollectionPage";
  canonicalPath?: string;
};

// Only existing content with useful text gets an indexable URL.
export const portfolioPages: PortfolioPage[] = [
  {
    path: "/",
    title: site.title,
    description: site.description,
    windowId: 1,
    schemaType: "ProfilePage",
  },
  {
    path: "/about",
    // The homepage opens the same about.md content.
    canonicalPath: "/",
    title: "About Lorenzo Ye",
    description:
      "Meet Lorenzo Ye, a builder who enjoys writing code, making music, and experimenting. Explore the story behind his interactive desktop portfolio.",
    windowId: 1,
    schemaType: "ProfilePage",
  },
  {
    path: "/skills",
    title: "Skills & tools | Lorenzo Ye",
    description:
      "Lorenzo Ye's software engineering skills and tools, including TypeScript, Next.js, React, React Native, Solidity, and cloud providers.",
    windowId: 2,
    schemaType: "WebPage",
  },
  {
    path: "/contacts",
    title: "Contact Lorenzo Ye",
    description:
      "Contact Lorenzo Ye by email or phone, or find his LinkedIn and X profiles.",
    windowId: 3,
    schemaType: "ContactPage",
  },
  {
    path: "/projects",
    title: "Projects | Lorenzo Ye",
    description:
      "Explore Lorenzo Ye's projects, including ninfa.io and a collection of past software projects.",
    folder: "projects",
    schemaType: "CollectionPage",
  },
  {
    path: "/projects/graveyard",
    title: "Past projects | Lorenzo Ye",
    description:
      "Browse Lorenzo Ye's past projects, including Anime Song Quiz, Calcisticamente Parlando, Save The Day, RepBase, and Tanuki Pay.",
    folder: "graveyard",
    schemaType: "CollectionPage",
  },
  {
    path: "/projects/graveyard/readme",
    title: "About the project graveyard | Lorenzo Ye",
    description:
      "Lorenzo Ye reflects on past projects, letting go of ideas, and learning by building.",
    windowId: 20,
    schemaType: "WebPage",
  },
  {
    path: "/projects/anime-song-quiz",
    title: "Anime Song Quiz | Lorenzo Ye",
    description:
      "The story of Anime Song Quiz, Lorenzo Ye's Android music quiz built with Kotlin, Android Studio, and Firebase, with over 2,000 downloads.",
    windowId: 17,
    schemaType: "WebPage",
  },
  {
    path: "/projects/calcisticamente-parlando",
    title: "Calcisticamente Parlando | Lorenzo Ye",
    description:
      "How Lorenzo Ye built a football podcast companion app with React Native, Expo, JavaScript, Puppeteer, and AWS.",
    windowId: 16,
    schemaType: "WebPage",
  },
  {
    path: "/projects/save-the-day",
    title: "Save The Day | Lorenzo Ye",
    description:
      "Save The Day, a collaborative asteroid clicker game by Lorenzo Ye, built with React Native, Expo, TypeScript, and Firebase.",
    windowId: 18,
    schemaType: "WebPage",
  },
];

export function getPortfolioPage(path: string) {
  return portfolioPages.find((page) => page.path === path);
}

export function getWindowPath(id: number) {
  if (id === 0) return "/pdf/cv.pdf";
  // Prefer /about over / for the about.md file.
  return portfolioPages.find((page) => page.path !== "/" && page.windowId === id)
    ?.path;
}

export function getFolderPath(folder: string) {
  return portfolioPages.find((page) => page.folder === folder)?.path;
}
