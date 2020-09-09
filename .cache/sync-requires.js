const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/src/pages/resume.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/nicholasiloba/Desktop/nicholasiloba/src/pages/work.js")))
}

