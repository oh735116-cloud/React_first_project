/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f8f4ef",
        page: "#ebe4dc",
        ink: "#3e352f",
        muted: "#6f6258",
        soft: "#8a7d72",
        accent: "#b48a78",
        line: "#e6dcd2",
        photo: "#e9ded3",
      },
      fontFamily: {
        serifKr: ['"Noto Serif KR"', "Georgia", '"Times New Roman"', "serif"],
        introScript: ['"Monsieur La Doulaise"', "cursive"],
      },
      boxShadow: {
        phone: "0 0 36px rgba(62, 53, 47, 0.16)",
      },
      keyframes: {
        sectionFadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        modalFade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        sectionFadeUp: "sectionFadeUp 720ms ease both",
        modalFade: "modalFade 180ms ease both",
      },
    },
  },
  plugins: [],
};
