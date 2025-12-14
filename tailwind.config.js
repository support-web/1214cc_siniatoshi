/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E7D32',
        'accent': '#E65100',
        'bg-light': '#FFFAF0',
        'text-main': '#333333',
        'line-green': '#06C755',
      },
      fontSize: {
        'base': '18px',
        'question': '22px',
        'button': '20px',
        'note': '16px',
      },
    },
  },
  plugins: [],
}
