import React from "react"
import Navigation from "./navigation.js"
import style from "./layout.module.scss"

export default ({ children }) => (
  <div className={style.container}>
    <Navigation />
    {children}
  </div>
)
