import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#BAA333",
        "light-background": "#E6EFFF",
        "dark-background": "#14213A",
        blue: "#0057FF",
        "white-s": "#D9D9D9",
        "sub-heading": "#14213A",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        fornav: "1020px",
      },
    },
  },
  plugins: [],
};
export default config;
