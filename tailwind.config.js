/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    screens: {
      smallphone: "390px",
      mobile: "440px",
      smalltab: "830px",
      tablet: "1030px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  extend: {
    fontFamily: {
      pretendard: ["Pretendard-Bold"],
    },
  },
  plugins: [],
};
