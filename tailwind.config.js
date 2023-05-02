/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xs: "400px",
      sm: "768px",
      md: "1000px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('../src/assets/desktop/header.jpg')",
        "transform-desktop": "url('../src/assets/desktop/transform.jpg')",
        "standout-desktop": "url('../src/assets/desktop/stand-out.jpg')",
        "graphic-design": "url('../src/assets/desktop/graphic-design.jpg')",
        photography: "url('../src/assets/desktop/photography.jpg')",
        "milk-bottles": "url('../src/assets/desktop/milkbottles.jpg')",
        orange: "url('../src/assets/desktop/orange.jpg')",
        cone: "url('../src/assets/desktop/cone.jpg')",
        "sugar-cubes": "url('../src/assets/desktop/sugarcubes.jpg')",
      },
      colors: {
        red: "var(--soft-red)",
        yellow: "var(--yellow)",
        "dark-desaturated-cyan": "var(--dark-desaturated-cyan)",
        "dark-blue": "var(--dark-blue)",
        "dark-moderate-cyan": "var(--dark-moderate-cyan)",
        "background-color": "var(--background)",
        "very-dark-desaturated-blue": "var(--very-dark-desaturated-blue)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "grayish-blue": "var(--grayish-blue)",
        white: "var(--white)",
        "footer-logo": "var(--footer-logo)",
        "footer-background": "var(--footer-background)",
        "footer-text": "var(--dark-moderate-cyan-footer)",
        "transparent-white": "var(--transparent-white)",
      },
      fontFamily: {
        barlow: "var(--barlow-font)",
        fraunces: "var(--fraunces-font)",
      },
    },
  },
  plugins: [],
};
