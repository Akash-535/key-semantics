/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('../public/assets/images/hero-background.webp')",
      },
      lineHeight: {
        "custom-lg": "112%",
        "custom-xl": "117%",
        "custom-2xl": "133%",
        "custom-3xl": "142%",
        "custom-4xl": "155%",
        "custom-6xl": "220%",
        "custom-175": "175%"
      },
      colors: {
        'blue-dark': '#191A42',
        'silver': '#C9CAD4',
        'white-lilac': '#F7F9FB',
        'faded-blue': '#7C7EB9',
        'nile-blue': '#24254B',
        'fountain-blue': '#48C3D7',
        'black-rock': '#111235'
      },
      boxShadow: {
        "hover": 'inset 200px 0px 0px 0px #191A42',
        "hover-2": 'inset 200px 0px 0px 0px #FFFFFF',
      },
      fontSize: {
        'custom-xs': '10px',
        'custom-3xl': '32px',
        'custom-6xl': "64px"
      },
      backgroundSize: {
        "custom": "100% 50%"
      },
    },
  },
  plugins: [],
}