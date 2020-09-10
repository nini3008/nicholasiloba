import React from "react";
import style from "./contact.module.scss";
import resume from "../images/resume/resume.pdf";
import Footer from "./footer.js";

const ContactPage = () => {
  return (
    <div className={style.contact_wrapper}>
      <section className={style.contact_section}>
        <div className={style.contact_header}>
          <span>Reach Me</span>
          <span>Today</span>
          <p>I'm keen on talking about possible job opportunities with you.</p>
        </div>

        <div className={style.contact_info}>
          <div className={style.email_phone}>
            <h4>Email</h4>
            <a
              href="mailto:nicholas.iloba@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nicholas.iloba@gmail.com
            </a>
            <h4>Phone</h4>
            <p>+1.202.251.7566</p>
          </div>

          <div className={style.location}>
            <h4>Location</h4>
            <p>Maryland, USA</p>
            <h4>Social</h4>
            <ul>
              <li>
                <a href="/">Linkedin</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>

          <div className={style.resume}>
            <h4>Resume</h4>
            <a
              href={resume}
              className={style.resume_download}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resumé"
            >
              Résumé.PDF
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
