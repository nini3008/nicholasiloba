import React from "react"
import resume from "../images/resume/resume.pdf"
import style from "./footer.module.scss"

const Navigation = () => {
  return (
    <div className={style.footer}>
      <span className={style.footerLeft}>© Nicholas Iloba</span>
      <p className={style.footerRight}>
        <span>Linkedin.</span>
        <span>Github.</span>
        <span>
          <a
            href={resume}
            className={style.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resumé"
          >
            Résumé
          </a>
        </span>
      </p>
    </div>
  )
}

export default Navigation
