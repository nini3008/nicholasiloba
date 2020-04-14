import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  overrideStyles: (options, styles) => ({
    h2: {
      fontFamily: ["Helvetica Neue"].join(","),
    },
  }),
})

export default typography
