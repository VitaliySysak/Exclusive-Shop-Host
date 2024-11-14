import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "jbl-bkg": "url('/assets/jbl-bg.png')",
        "jbl-bkg-mb": "url('/assets/jbl-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
export default config;