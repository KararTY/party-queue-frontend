const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
			fontFamily: {
				sans: ['"GrandstanderVariable"', ...defaultTheme.fontFamily.sans]
			}
		},
  },
  plugins: [require('@tailwindcss/typography')],
}
