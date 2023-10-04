/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      RedHatDisplay: ['Red Hat Display', 'sans-serif'],
    },
    screens: {
      coxs: '375px',
      xs: '425px',
      cosm: '500px',
      sm: '576px',
      comd: '680px',
      md: '768px',
      colg: '850px',
      lg: '992px',
      coxl: '1050px',
      xl: '1200px',
      co2xl: '1320px',
      '1500px': '1500px',
      '2xl': '1440px',
      '3xl': '1660px',
      '4xl': '1800px',
      max: '2000px',
      // max-width breakpoints
      maxxs: { max: '424.5px' },
      maxcosm: { max: '524.5px' },
      maxsm: { max: '575.5px' },
      maxcomd: { max: '649.5px' },
      maxmd: { max: '767.5px' },
      maxcolg: { max: '849.5px' },
      maxlg: { max: '991.5px' },
      maxxl: { max: '1199.5px' },
      // min and max width breakpoints
      'md-to-lg': { min: '768px', max: '992px' },
      'lg-to-xl': { min: '992px', max: '1199px' },
    },
    extend: {
      colors: {
        primary: '#051831',
        secondary: '#1E1E1E',
        c1: '#C30000',
        c2: '#ABABAB',
        c3: '#0DA200',
        c4: '#566DA3',
        c5: '#6B6B6B',
        c6: '#020407',
        c7: '#eeeeee',
        c8: '#CAD5DC',
      },
    },
  },
  plugins: [],
};

// font-family: 'Inter', sans-serif;
