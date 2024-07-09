import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        white: "white",
        opacity_white: "RGBA(255, 255, 255, 0.1)",
        custom_gray: "RGB(34, 34, 34)",
        custom_lightgray: "#F8F8F8",
      },
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        sans: ["var(--font-open-sans)", ...fontFamily.sans],
        raleway: ["var(--font-raleway)", ...fontFamily.sans],
        lato: ["var(--font-lato)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
      fontSize: {
        "title-text": "65px",
        "big-text": "48px",
        "info-text": "22px",
        "desc-text": "20px",
        "button-text": "18px",
        "regular-text": "16px",
        "light-text": "14px",
      },
      fontWeight: {
        "bold-text": "700",
        "normal-text": "400",
        "semibold-text": "600",
      },
      colors: {
        primary_color: "RGB(235, 0, 40)",
        custom_gray: "RGB(34, 34, 34)",
        custom_lightgray: "RGB(119, 119, 119)",
        custom_blue: "RGB(0, 156, 224)",
      },
    },
  },
  plugins: [],
};
export default config;
