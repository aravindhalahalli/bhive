/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        maxWidth: {
          'screen-1200': '1200px',
        },
      },
      colors: {
        primary: {
          1: "#000000",
          2: "#FFBB00",
        },
        button: {
          primary: {
            main: "#FFCF4B",
            stroke: "#27AE60",
          },
          secondary: {
            main: "#F9F9F9",
            stroke: "#CEC6C6",
          },
        },
        text: {
          main: "#263238",
          secondary: "#65624C",
        },
       
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#B7B6B8",
          5: "#E0E0E0",
        },
      },
      fontSize: {
        h1: ["58px", { lineHeight: "1.1" }],
        h2: ["36px", { lineHeight: "1.1" }],
        h3: ["24px", { lineHeight: "1.1" }],
        h4: ["20px", { lineHeight: "28px" }],
        h5: ["18px", { lineHeight: "1.1" }],
        h6: ["16px", { lineHeight: "1.1" }],
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
