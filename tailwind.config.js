module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
       colors: {
        black: "#3D4B53",
        "dark-700": "#3D4B5380",
        dark: {
          DEFAULT: "#3D4B53",
          2: "#2F3B42",
          3: "#558C83",
          4: "#457A70",
          5: "#84B0A7",
          6: "#B0CCC4",
          7: "#D1E0DB",
          8: "#F5F1E5",
        },
        primary: "#D06F3C",
        "blue-dark": "#3D4B53",
        secondary: "#558C83",
        "body-color": "#3D4B53",
        "body-secondary": "#558C83",
        warning: "#E3C05B",
        stroke: "#B0CCC4",
        "gray-1": "#F5F1E5",
        "gray-2": "#EDE6D1",
        "gray-7": "#84B0A7",
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
