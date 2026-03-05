/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Poppins", "sans-serif"]
      },
      colors: {
        brand: {
          text: "#333333",
          accent: "#008080",
          hover: "#006666",
          bg: "#FFFFFF",
          soft: "#F7F9FA",
          border: "#E5E7EB"
        }
      }
    }
  },
  plugins: []
};

