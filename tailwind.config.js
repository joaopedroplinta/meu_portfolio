/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#0a0a0f",
        surface: "#111118",
        card:    "#16161f",
        border:  "#1e1e2e",
        accent:  "#7c6af7",
        accent2: "#e84393",
        accent3: "#3ecfcf",
        hi:      "#f0f0ff",
        muted:   "#6b6b80",
      },
      fontFamily: {
        syne:       ["Syne", "sans-serif"],
        mono:       ["DM Mono", "monospace"],
        serif:      ["Instrument Serif", "serif"],
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
