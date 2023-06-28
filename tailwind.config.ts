import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-khula)", ...fontFamily.sans],
        serif: ["var(--font-literata)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
