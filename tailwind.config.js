/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        PW: '#ffffff',
        PY: '#d1ae23',
        PBM: '#436387',
        PBT: '#0a3757',
        PB: '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'home-bg': "url('https://t3.ftcdn.net/jpg/05/00/10/16/360_F_500101658_Uc546WfqJtaYXOVYZnsetAetYlrvU7Vl.jpg')",
      }
    },
  },
  plugins: [],
}

