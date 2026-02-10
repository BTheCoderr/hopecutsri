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
        "hope-red": "#C41E3A",
        "patriot-blue": "#1E3A8A",
        "hope-gold": "#D4A853",
        slate: {
          200: "#E2E8F0",
          600: "#475569",
          900: "#0F172A",
        },
        "warm-gray": "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
