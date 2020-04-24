import React from "react"
import Navigation from "./navigation.js"
import Footer from "./footer.js"
import "../styles/global.scss"

export default ({ children }) => (
  <div className="container">
    <Navigation />
    {children}
    <Footer />
  </div>
)
