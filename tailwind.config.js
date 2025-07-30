/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border, 215 25% 20%))",      // Dark blue-gray border
        input: "hsl(var(--input, 215 15% 15%))",        // Slightly lighter black
        ring: "hsl(var(--ring, 200 100% 60%))",         // Cyan ring
        background: "hsl(var(--background, 220 15% 5%))", // Almost black
        foreground: "hsl(var(--foreground, 180 60% 90%))", // Teal-white
         background: "#0f0f0f",
      border: "rgba(255, 255, 255, 0.2)",
      accent: "#22d3ee", // cyan-400

        primary: {
          DEFAULT: "hsl(var(--primary, 210 100% 60%))",     // Vibrant blue
          foreground: "hsl(var(--primary-foreground, 0 0% 100%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 180 100% 40%))",   // Deep teal
          foreground: "hsl(var(--secondary-foreground, 0 0% 100%))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 100% 50%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 100%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 215 15% 25%))",
          foreground: "hsl(var(--muted-foreground, 215 20% 70%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 180 100% 50%))",     // Cyan for hover/borders
          foreground: "hsl(var(--accent-foreground, 0 0% 100%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 220 15% 8%))",
          foreground: "hsl(var(--popover-foreground, 180 60% 90%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 220 15% 10%))",
          foreground: "hsl(var(--card-foreground, 180 60% 90%))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 1rem)",
        md: "calc(var(--radius, 1rem) - 2px)",
        sm: "calc(var(--radius, 1rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
