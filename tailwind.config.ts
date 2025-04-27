import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dragbar: "var(--dragbar)",
        windowbg: "var(--windowbg)",
        baseColor: "var(--baseColor)",
      },
      boxShadow: {
        whiteGroovy: "inset 5px 5px 7px -8px #e6e6e6",
      },
    },
  },
  plugins: [],
} satisfies Config;
