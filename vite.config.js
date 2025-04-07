import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'



// https://vite.dev/config/
export default defineConfig({

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1930', // Deep blue
          light: '#0f2648',
          dark: '#060f1a',
        },
        secondary: {
          DEFAULT: '#3498db', // Accent color
          light: '#5dade2',
          dark: '#2874a6',
        },
        background: {
          light: '#f8fafc',
          dark: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [
    tailwindcss(),
    react()],
})


