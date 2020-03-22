import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <React.Fragment>
      <div>
        <Link to="/">nickiloba</Link>
      </div>
      <div>
        <Link to="">Work</Link>
        <Link to="/resume">Resume</Link>
        <Link to="">Contact</Link>
      </div>
    </React.Fragment>
  )
}

export default Navigation
