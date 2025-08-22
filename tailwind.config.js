/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'footer-bg': 'url(/assets/images/home/foot.png)',
        'banner-bg': 'url(/assets/images/home/banner.png)',
        support: 'url(/assets/main/customer.png)',
        gradient: 'linear-gradient(0deg, #ECDEFF 0%, #FFF 96.25%)',
        gold:'linear-gradient(to bottom, #F8E889 50%, #E4B764 50%)'
      },
      colors: {
        primary: '#6539B8', // purple
        secondary: '#FFC916', // golden
        purple_1: '#BA68C8', // hover purple
        green: '#00DF76', // hover purple
        red: '#FF3E3E', // hover purple
        purple: '#E9DDFF',
        menu: 'bg-gradient-to-b from-[#F8E889] from-50% to-[#E4B764] to-50%  bg-clip-text text-transparent'
      },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}