import React from "react";
import resume from "../images/resume/resume.pdf";
import style from "./footer.module.scss";

const Navigation = () => {
  return (
    <div className={style.footer}>
      <span className={style.footerLeft}>© Nicholas Iloba</span>
      <p className={style.footerRight}>
        <span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicholas-iloba-38241652/"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            Linkedin.
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://github.com/nini3008"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            Github.
          </a>
        </span>
        <span>
          <a
            href={resume}
            className={style.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resumé"
          >
            Resume
          </a>
        </span>
      </p>
    </div>
  );
};

export default Navigation;
