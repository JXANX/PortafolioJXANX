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
          DEFAULT: "var(--bg, #0D0B0E)",
          elevated: "var(--bg-elevated, #161318)",
          surface: "var(--bg-surface, #1E1A22)",
        },
        ghibli: {
          amber: "var(--ghibli-amber, #D99B26)",
          "amber-glow": "var(--ghibli-amber-glow, #E8AE3B)",
          sage: "var(--ghibli-sage, #5A8A6A)",
          "sage-light": "var(--ghibli-sage-light, rgba(90, 138, 106, 0.12))",
          terracotta: "var(--ghibli-terracotta, #C86D51)",
        },
        text: {
          primary: "var(--text-primary, #F0EBE3)",
          secondary: "var(--text-secondary, #A89F96)",
          muted: "var(--text-muted, #6B6168)",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
