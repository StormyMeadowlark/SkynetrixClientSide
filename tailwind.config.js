/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F5F5F5',
          text: '#0A0A0A',
          primary: '#00A8A8',
          secondary: '#6A10A8',
          accent: '#A52CCF',
          muted: '#E0E0E0',
        },
        dark: {
          background: '#0E0E11',
          text: '#F5F5F5',
          primary: '#1DC3A2',
          secondary: '#55129E',
          accent: '#B341E0',
          muted: '#2A054A',
        },
        neon: {
          Green: '#00FFB2',
          Purple: '#4D00FF',
          Blue: '#00FFFF',
          Pink: '#FF00FF'
        }
      },
      fontFamily: {
        sans: ['Exo2', 'Arial', 'sans-serif'], // Main sans-serif font
        orbitron: ['Orbitron', 'Helvetica', 'sans-serif'], // Futuristic headings
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      boxShadow: {
        'theme-light': '0px 4px 6px rgba(0, 0, 0, 0.1)',
        'theme-dark': '0px 6px 8px rgba(0, 0, 0, 0.2)',
        'theme-heavy': '0px 8px 12px rgba(0, 0, 0, 0.3)',
        neon: '0 0 10px #A52CCF, 0 0 20px #6A10A8', // Neon purple
        'neon-teal': '0 0 10px #00A8A8, 0 0 20px #5ED4CF', // Neon teal
        'neon-green': '0 0 10px #00FFB2, 0 0 20px #00FFB2',
'neon-blue': '0 0 10px #00FFFF, 0 0 20px #00FFFF',
'neon-pink': '0 0 10px #FF00FF, 0 0 20px #FF00FF',
      },
      fontSize: {
        sm: ['14px', '20px'], // Small text
        base: ['16px', '24px'], // Default text
        lg: ['20px', '28px'], // Large text
        xl: ['24px', '32px'], // Extra large text
      },
      gradientColorStops: {
        light: {
          primary: ['#00A8A8', '#5ED4CF'], // Light teal gradient
          accent: ['#6A10A8', '#A52CCF'], // Light purple gradient
        },
        dark: {
          primary: ['#1DC3A2', '#00FFB2'], // Neon teal gradient
          accent: ['#55129E', '#B341E0'], // Neon purple gradient
        },
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        fast: '100ms',
        slow: '400ms',
      },
      keyframes: {
        hoverGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #00FFB2' },
          '50%': { boxShadow: '0 0 20px #4D00FF' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px #6A10A8' },
          '50%': { boxShadow: '0 0 20px #A52CCF' },
        },
      },
      animation: {
        hoverGlow: 'hoverGlow 1.5s infinite',
        pulse: 'pulseGlow 2s infinite', // Glowing effect animation
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
