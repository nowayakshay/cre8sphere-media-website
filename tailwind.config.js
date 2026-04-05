/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Sora'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      colors: {
        brand: {
          // Core
          accent:   "#008080",
          hover:    "#006666",
          light:    "#F2F9F9",
          soft:     "rgba(0,128,128,0.10)",
          // Text hierarchy
          text:     "#000000",
          body:     "#333333",
          muted:    "#6B7280",
          // Backgrounds
          bg:       "#FFFFFF",
          alt:      "#F9FAFB",
          // Border
          border:   "#E5E7EB"
        }
      }
    }
  },
  plugins: []
};
