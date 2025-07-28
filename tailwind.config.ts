import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        main : {
            50: '#FFF8E1',
            100: '#FFE8A4',
            200: '#FFD36B',
            300: '#FFBD32',
            400: '#E6A719',
            default: '#A16418',
            600: '#7A4D11',
            700: '#59370B',
            800: '#3A2205',
            900: '#1E1102',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}