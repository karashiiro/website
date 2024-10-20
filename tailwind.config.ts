import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile":
          "url('https://avatars.githubusercontent.com/u/49822414?v=4')",
      },
      fontFamily: {
        "fancy": ['"Fugaz One"', "cursive"],
      },
    },
  },
} satisfies Config;
