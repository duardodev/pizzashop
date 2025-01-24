/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        tight: 1.3,
      },
      colors: {
        white: '#FFFFFF',
        background: '#FCF7F7',
        card: '#FEE2E2',
        button: '#FDF7F7',
        label: '#8D8686',
        text: '#574F4D',
        title: '#403937',

        red: '#EF4444',
        orange: '#F97316',
        green: '#4ADE80',

        'button-dark': '#FCF5F5',
        'red-dark': '#DC2626',
        'red-light': '#FEE2E2',
        'red-border': '#FECACA',
        'orange-light': '#FFEDD5',
      },
      animation: {
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out-x': 'toast-swipe-out-x 100ms ease-out forwards',
        'toast-swipe-out-y': 'toast-swipe-out-y 100ms ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-radix')(), require('tailwindcss-animate')],
};
