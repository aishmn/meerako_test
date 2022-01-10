module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Montserrat"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Roboto"],
      body: ['"Roboto"'],
    },
  },
  plugins: [],
  transpile: ["gsap"],
};
