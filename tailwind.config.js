/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo Colors
        primary: {
          1: "#000000", // Primary 1
          2: "#FFBB00", // Primary 2
        },
        // Button Colors
        button: {
          primary: {
            main: "#FFCF4B", // Main Light Yellow
            stroke: "#27AE60", // Stroke Dark Yellow
          },
          secondary: {
            main: "#F9F9F9", // Main Light Grey
            stroke: "#CEC6C6", // Stroke Dark Grey
          },
        },
        // Text Colors
        text: {
          main: "#263238", // Main Text Color
          secondary: "#65624C", // Secondary Text Color
        },
        // Greys
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#B7B6B8",
          5: "#E0E0E0",
        },
      },
      fontSize: {
        h1: ["58px", { lineHeight: "1.1" }], // Heading 1
        h2: ["36px", { lineHeight: "1.1" }], // Heading 2
        h3: ["24px", { lineHeight: "1.1" }], // Heading 3
        h4: ["20px", { lineHeight: "1.1" }], // Heading 4
        h5: ["18px", { lineHeight: "1.1" }], // Heading 5
        h6: ["16px", { lineHeight: "1.1" }], // Heading 6
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default font family
      },
    },
  },
  plugins: [],
}

