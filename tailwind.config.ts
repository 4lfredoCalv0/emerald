import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Manrope'", "'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        brand: ["'Manrope'", "'Space Grotesk'", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        surface: {
          DEFAULT: "#030712",
          50: "#0f172a",
          100: "#1e293b",
          200: "#334155",
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        flow: "flow 12s ease-in-out infinite",
        "flow-fast": "flow 6s ease-in-out infinite",
        "cable-pulse": "cable-pulse 3s ease-in-out infinite",
        "node-pulse": "node-pulse 2s ease-in-out infinite",
        "structural-arc": "structural-arc 4s ease-in-out infinite alternate",
        "bridge-glow": "bridge-glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(0.5deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        flow: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "cable-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        "node-pulse": {
          "0%, 100%": { opacity: "0.3", r: "1" },
          "50%": { opacity: "0.7", r: "2" },
        },
        "structural-arc": {
          "0%": { d: "path('M 0,0 Q 50,0 100,0')" },
          "100%": { d: "path('M 0,0 Q 50,20 100,0')" },
        },
        "bridge-glow": {
          "0%": { boxShadow: "0 0 15px rgba(16, 185, 129, 0.15)" },
          "100%": { boxShadow: "0 0 35px rgba(16, 185, 129, 0.3)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
