import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg, #0A0A0A)",
          elevated: "var(--bg-elevated, #141010)",
        },
        red: {
          900: "var(--red-900, #4A1414)",
          700: "var(--red-700, #7A2420)",
          500: "var(--red-500, #C4272B)",
          400: "var(--red-400, #E8352F)",
        },
        text: {
          primary: "var(--text-primary, #F2ECE6)",
          secondary: "var(--text-secondary, #8A7F7A)",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serifAccent: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
