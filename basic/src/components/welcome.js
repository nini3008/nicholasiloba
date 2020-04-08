import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import style from "./welcome.module.scss"

const Welcome = () => {
  return (
    <section>
      <StaticQuery
        query={graphql`
          query {
            allDataJson {
              edges {
                node {
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
        render={data => (
          <>
            {data.allDataJson.edges.map((data, id) => (
              <div
                key={1}
                className={style.home_page}
                style={{ background: "#383838" }}
              >
                <div className={style.leftSide}></div>
                <div className={style.rightSide}>
                  <h1>{data.node.description[0].welcometext}</h1>
                  <p>{data.node.description[0].midText}</p>
                  <p>{data.node.description[0].lowText}</p>
                  <Link to="/contact">{data.node.description[0].contact}</Link>
                </div>
              </div>
            ))}
          </>
        )}
      />
    </section>
  )
}

export default Welcome
