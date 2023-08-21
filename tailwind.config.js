
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom_light_bg: "#F6F6F6",
        custom_dark_bg: "#252525",
      },
      fontFamily: {
        PlayfairDisplay: ['PlayfairDisplay']
      }
    },
  },
  plugins: [],
}
