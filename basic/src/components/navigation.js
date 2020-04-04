import React from "react"
import { Link } from "gatsby"
import style from "./navigation.module.scss"

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.logo}>
        <Link to="/">nickiloba</Link>
      </div>
      <nav>
        <Link to="/work">Work</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navigation
