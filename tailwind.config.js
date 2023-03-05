/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        XXXXL: "var(--XXXXL)",
        XXXL: "var(--XXXL)",
        XXL: "var(--XXL)",
        XL: "var(--XL)",
        L: "var(--L)",
        M: "var(--M)",
        S: "var(--S)",
        XS: "var(--XS)",

        EM: "var(--EM)",
        EXS: "var(--EXS)",
      },
      colors: {
        black: "var(--black)",
        darkergrey: "var(--darkergrey)",
        darkgrey: "var(--darkgrey)",
        mediumgrey: "var(--mediumgrey)",
        grey: "var(--grey)",
        lightgrey: "var(--lightgrey)",
        lightergrey: "var(--lightergrey)",
        almostwhite: "var(--almostwhite)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
