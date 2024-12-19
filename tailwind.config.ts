module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};