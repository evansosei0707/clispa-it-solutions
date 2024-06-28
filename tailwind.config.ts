import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(270deg, #030b63, #0179af);",
      },
      fontFamily: {
        liv: ["var(--font-liv)"],
        raj: ["var(--font-raj)"],
      },
      colors: {
        primaryColor: "#009AF7",
        primaryLight: "#E5F5FE",
        primaryLightBg: "#F2FAFF",
        primaryDeep: "#192837",
        primaryLightDeep: "#153A55",
        primaryHover: "#3398FF",
        primaryClicked: "#66B2FF",
        secondaryColor: "#66C2FA",
        secondaryDeep: "#0A6AA6",
        tgBackground: "#1A222D",
        tgBackground2: "#242F3E",
        mainColor: "#023e8a",
        mainColor2: "#0077b6",
        customBlack: "#0c0c0c",
        lightColor2: "#86c4e0",
        lightColor: "#e7fbff",
      },
    },
  },
  plugins: [],
};
export default config;
