module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f9ff",
          100: "#e5f0ff",
          200: "#b3d4ff",
          300: "#80b8ff",
          400: "#4d96ff",
          500: "#1a73ff",
          600: "#0052cc",
          700: "#003d99",
          800: "#002966",
          900: "#001433",
        },
        accent: {
          500: "#ff6b35",
          600: "#e55a2b",
        },
        wood: {
          500: "#8b4513",
          600: "#6b330f",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}