
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'serif'],
        Poppins: ['Poppins', 'serif'],
        Montserrat: ['Montserrat', 'serif'],
      },
      zIndex: {
        100: '100',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #FFFFFF, #6DD5FA, #2980B9)',
        'auth-gradiant'  : 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(1, 8, 97, 1) 100%, rgba(1, 10, 110, 1) 100%, rgba(1, 83, 165, 1) 100%, rgba(1, 56, 144, 1) 100%, rgba(0, 119, 192, 1) 100%, rgba(0, 212, 255, 1) 100%, rgba(1, 11, 118, 0.83) 100%, rgba(1, 112, 187, 1) 100%)',
        'back-gradiant' : "linear-gradient(to bottom right, #0a192f, #00b4b4)" ,
      },
      colors: {
        ivory : 'ivory' ,
        'custom-gradient': {
          DEFAULT: 'linear-gradient(to bottom right, #34D399, #064E3B)',
        },
        transitionProperty: {
          'all': 'all', 
        },
        transitionDuration: {
          '600': '600ms', 
        },
        transitionTimingFunction: {
          'ease-in-out': 'ease-in-out', 
        },
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.05)" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        'pulse-slow': 'pulse 3s infinite', 
        'fade-in': 'fade-in 0.7s ease-out',
        'slide-right': 'slideRight 4s ease-in-out',
        'slide-left': 'slideLeft 4s ease-in-out',
        'slide-up': 'slideUp 4s ease-in-out',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};



