import React from "react";
import { Link } from "gatsby";
import style from "./navigation.module.scss";

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.logo}>
        <h2>
          <Link to="/">
            <span>N.</span>
          </Link>
        </h2>
      </div>
      <nav>
        <ul className={style.links}>
          {/* <li>
            <Link to="/work" activeClassName={style.active}>
              Work
            </Link>
          </li> */}
          <li>
            <Link to="/resume" activeClassName={style.active}>
              Résumé
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName={style.active}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
