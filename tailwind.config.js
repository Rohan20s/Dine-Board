// /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0070f3',
        'primary-dark': '#1e90ff',
        'background': '#fff',
        'background-dark': '#181818',
        'text': '#222',
        'text-dark': '#fafafa',
        'secondary': '#333',
        'secondary-dark': '#fafafa',
        'border': '#ddd',
        'border-dark': '#444',
        'hover': '#005bb5',
        'hover-dark': '#1e90ff',
        'surface': '#f5f5f5',
        'surface-dark': '#222',
        'divider': '#eee',
        'divider-dark': '#333',
      },
    },
  },
  plugins: [],
}
