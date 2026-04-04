/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      colors: {
        brand: {
          text: "#0f172a",
          accent: "#008080",
          hover: "#0a6d6d",
          bg: "#f8fafb",
          soft: "#ffffff",
          border: "#e5e7eb"
        }
      }
    }
  },
  plugins: []
};
