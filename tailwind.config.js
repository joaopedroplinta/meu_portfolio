/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#0b0c11",
        surface: "#121319",
        card:    "#16171f",
        border:  "#212230",
        accent:  "#7b6ef6",
        accent2: "#4f8ef7",
        accent3: "#3ecfcf",
        hi:      "#eef0fa",
        muted:   "#7d8094",
      },
      fontFamily: {
        display: ["JetBrains Mono", "monospace"],
        mono:    ["IBM Plex Mono", "monospace"],
        prose:   ["IBM Plex Sans", "sans-serif"],
        serif:   ["Instrument Serif", "serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(1.5)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink:   "blink 2s infinite",
        fadeUp:  "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
