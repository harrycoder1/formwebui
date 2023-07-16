/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(255, 255, 255, 0.4)",
        "palegreen": "#71ec6e",
"lightcoral": "#ff8080",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {},
  },

  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [],
}


// theme: {
//   extend: {
    
//   },
 
// },

