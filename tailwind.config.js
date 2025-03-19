/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enables dark mode support
  theme: {
    extend: {
      colors: {
        "dark-primary-bg": "#1B022F", // Dark Mode Background
        "light-primary-bg": "#F5F5F5", // Light Mode Background
        "light-teal": "#5ED4CF",
        gray: "#F5F5F5",
        "light-purple": "#A52CCF",
        white: "#FFFFFF",
        "dark-purple": "#6A10A8",
        teal: "#008080",
        purple: "#2A054A",
        black: "#000000",
      },
      fontFamily: {
        sans: ["Exo2", "Arial", "sans-serif"], // Main sans-serif font
        orbitron: ["Orbitron", "Helvetica", "sans-serif"], // Futuristic headings
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      boxShadow: {
        "theme-light": "0px 4px 6px rgba(0, 0, 0, 0.1)",
        "theme-dark": "0px 6px 8px rgba(0, 0, 0, 0.2)",
        "theme-heavy": "0px 8px 12px rgba(0, 0, 0, 0.3)",
        "neon-purple": "0 0 10px #A52CCF, 0 0 20px #6A10A8",
        "neon-teal": "0 0 10px #008080, 0 0 20px #5ED4CF",
      },
      fontSize: {
        sm: ["14px", "20px"], // Small text
        base: ["16px", "24px"], // Default text
        lg: ["20px", "28px"], // Large text
        xl: ["24px", "32px"], // Extra large text
      },
      gradientColorStops: {
        "gradient-light": ["#5ED4CF", "#A52CCF"], // Light Mode Gradient
        "gradient-dark": ["#1B022F", "#6A10A8"], // Dark Mode Gradient
        "gradient-teal": ["#008080", "#5ED4CF"], // Teal Gradient
        "gradient-purple": ["#2A054A", "#A52CCF"], // Purple Gradient
      },
      transitionTimingFunction: {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "100ms",
        slow: "400ms",
      },
      keyframes: {
        hoverGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #5ED4CF" },
          "50%": { boxShadow: "0 0 20px #008080" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px #A52CCF" },
          "50%": { boxShadow: "0 0 20px #6A10A8" },
        },
      },
      animation: {
        hoverGlow: "hoverGlow 1.5s infinite",
        pulse: "pulseGlow 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
