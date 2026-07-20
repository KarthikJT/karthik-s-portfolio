/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        card: "#FFFFFF",
        accent: "#B8860B",
        "accent-dark": "#96700A",
        "text-primary": "#222222",
        "text-secondary": "#666666",
        border: "#E9E4DD",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(34, 34, 34, 0.06)",
        card: "0 2px 12px rgba(34, 34, 34, 0.05)",
        hover: "0 12px 32px rgba(184, 134, 11, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
