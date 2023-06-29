/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0038FF",
        "primary-400": "#3FA9FF",
        "primary-300": "#7EBCFF",
        "primary-200": "#9BCCEB",
        "primary-100": "#CBF1FF",
        "base": "#f2f2f2"
      },
      fontSize: {
        "xxs": ".625rem",
      },

    },

  },
  plugins: ['@tailwindcss/line-clamp'],
}

