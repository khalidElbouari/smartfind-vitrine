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
        black: "#2D3E4F",
        "dark-700": "#2D3E4F80",
        dark: {
          DEFAULT: "#2D3E4F",
          2: "#34495E",
          3: "#5D7A8B",
          4: "#6B8FA3",
          5: "#8BB4C8",
          6: "#A8C8D8",
          7: "#C5DCE8",
          8: "#E8F4F8",
        },
        primary: "#E67E22", // Orange from logo
        "blue-dark": "#2D3E4F", // Dark blue-gray from logo
        secondary: "#0f9e56", // Green from logo (adjusted for better contrast)
        "body-color": "#2D3E4F",
        "body-secondary": "#5D7A8B",
        warning: "#F1C40F", // Yellow from logo
        stroke: "#BDC3C7",
        "gray-1": "#F8F9FA",
        "gray-2": "#E9ECEF",
        "gray-7": "#6C757D",
        // Logo-specific colors
        "logo-orange": "#E67E22",
        "logo-green": "#27AE60",
        "logo-teal": "#16A085",
        "logo-yellow": "#F39C12",
        "logo-blue": "#3498DB",
        "logo-dark": "#2C3E50",
        "logo-gray": "#5D6D7E",
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
