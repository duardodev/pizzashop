/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-roboto)'
      }
    },

    colors: {
      white: '#FFFFFF',
      backgroud: '#FAFAFA',
      card: '#F3F2F2',
      button: '#E2E8F0',
      label: '#8D8686',
      text: '#574F4D',
      subtitle: '#403937',
      title: '#272221',

      red: '#EF4444',
      orange: '#F97316',
      green: '#4ADE80',

      'button-dark': '#E4E4E7',
      'red-dark': '#DC2626',
      'red-light': '#FEE2E2',
      'red-border': '#FECACA',
      'orange-light': '#FFEDD5'
    }
  },
  plugins: []
};
