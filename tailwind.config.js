/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {
    screens: {
      mobile: "440px",
      tablet: "1024px",
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
