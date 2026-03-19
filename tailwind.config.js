/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      colors: {
        brand: {
          text: "#F8FAFC",
          accent: "#008080",
          hover: "#0AA0A0",
          bg: "#07111F",
          soft: "#0B1628",
          border: "rgba(148,163,184,0.18)"
        }
      }
    }
  },
  plugins: []
};
