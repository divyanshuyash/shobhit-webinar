import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0B0B",
        charcoal: "#161616",
        gold: "#D9A520",
        electric: "#D9A520",
        mint: "#E7BE4F",
        offwhite: "#F3F3F3",
        muted: "#8E8E8E"
      },
      fontFamily: {
        display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
        body: ["Montserrat", "Poppins", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(217, 165, 32, 0.35), 0 18px 60px rgba(0, 0, 0, 0.35)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "grid-gold":
          "linear-gradient(rgba(217,165,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,165,32,0.06) 1px, transparent 1px)",
        "soft-radial":
          "radial-gradient(circle at top right, rgba(217,165,32,0.14), transparent 34%), radial-gradient(circle at bottom left, rgba(217,165,32,0.12), transparent 32%)"
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" }
        },
        "scan-down": {
          "0%": { transform: "translateY(-110%)" },
          "100%": { transform: "translateY(110%)" }
        },
        "data-slide": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "160px 0" }
        }
      },
      animation: {
        "float-y": "float-y 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "scan-down": "scan-down 4.5s linear infinite",
        "data-slide": "data-slide 5s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
