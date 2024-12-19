/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 프로젝트 내 파일들
    "./node_modules/flowbite/**/*.js", // Flowbite 포함
  ],
  theme: {
    extend: {},
  },
};