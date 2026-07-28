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
        brand: {
          blue: "#0086FF",
          aqua: "#25D0FF",
          gold: "#D8B15A",
          darkblue: "#083358",
          sky: "#EBF6FF",
          ice: "#F4FAFF",
          glow: "rgba(37, 208, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 134, 255, 0.08)",
        "glass-hover": "0 14px 40px 0 rgba(0, 134, 255, 0.18)",
        gold: "0 4px 20px 0 rgba(216, 177, 90, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        ripple: "ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
