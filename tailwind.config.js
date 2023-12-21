/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl': [
            '0 4px 4px rgba(218, 196, 196, 0.25)'
        ]
      }
    },
  },
  plugins: [],
}

