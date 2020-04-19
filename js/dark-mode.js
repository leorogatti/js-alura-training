const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style) 

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
  colorH1: getStyle(html, "--color-h1"),
  colorLabel: getStyle(html, "--color-label"),
  colorTh: getStyle(html, "--color-th"),
  colorTd: getStyle(html, "--color-td"),
  colorTr: getStyle(html, "--color-tr"),
}

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  colorHeadings:"#5668FF",
  colorText: "#B5B5B5",
  colorH1: "#FFF",
  colorLabel: "#FFF",
  colorTh: "#FFF",
  colorTd: "#f5f5f5",
  colorTr: "#333333"
}


const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
   Object.keys(colors).map(key =>
      html.style.setProperty(transformKey(key), colors[key])
    )
}


checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors) 
})