/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{tsx,ts}"],
  theme: {},
  extend: {
    fontFamily: {
      pretendard: ["Pretendard-Bold"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
