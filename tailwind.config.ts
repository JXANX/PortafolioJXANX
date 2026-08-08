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
          card: "var(--bg-card, #0E0E12)",
          "card-hover": "var(--bg-card-hover, #121218)",
        },
        accent: {
          DEFAULT: "var(--accent, #FFFFFF)",
          strong: "var(--accent-strong, #F0F0F5)",
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
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
