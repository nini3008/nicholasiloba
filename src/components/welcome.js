import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import style from "./welcome.module.scss";
import Footer from "./footer.js";

const Welcome = () => {
  return (
    <>
      <section className={style.home_section}>
        <StaticQuery
          query={graphql`
            query {
              allDataJson(filter: { title: { eq: "Home Page" } }) {
                edges {
                  node {
                    profileImg {
                      childImageSharp {
                        fixed {
                          src
                        }
                      }
                    }
                    description {
                      midText
                      welcometext
                      lowText
                      contact
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <>
              {data.allDataJson.edges.map((data, id) => (
                <div key={1} className={style.home_page}>
                  <div className={style.top}>
                    <div className={style.avatar}>
                      <img
                        src={data.node.profileImg.childImageSharp.fixed.src}
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className={style.bottom}>
                    <h1>{data.node.description[0].welcometext}</h1>
                    <h2>{data.node.description[0].midText}</h2>
                    <p>{data.node.description[0].lowText}</p>
                    <Link to="/contact">
                      {data.node.description[0].contact}
                    </Link>
                  </div>
                </div>
              ))}
            </>
          )}
        />
      </section>
      <Footer />
    </>
  );
};

export default Welcome;
