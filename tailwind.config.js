/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      // lg: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      lg2: ["24px", "26.4px"],
      lg3:["32px", "35.2px"],
      lg4: ["48px", "52.8px"],
      xl: ["56px", "61.6px"],
      xxl: ["72px", "79.2px"],
      xxxl: ["96px", "105.6px"],
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#78350F",
      white: "#ffffff",
      grey: "#475569",
      darkBlue: "#0F172A",
      brown: "#78350F",
    },
    height: {
      heroHeight: "583px",
      suggestionHeight: "776px",
      reasonHeight: "816px",
      mobileReasonHeight: "1030px",
      commentHeight: "732px",
      collectionHeight: "996px",
      mapHeight: "956px",
      footerHeight: "515px",
      mobileAutoHeight: "auto",
    },
    backgroundColor: {
      brown: "#78350F",
      white: "#ffffff",
      lightGrey: "#E2E8F0",
      darkBlue: "#0F172A",
      lightGrey2: "#F0F3FF",
    },
  },
  plugins: [],
};
