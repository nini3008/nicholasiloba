import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import style from "./work.module.scss"
import { v4 as uuidv4 } from "uuid"

const WorkPage = () => {
  const [isToggled, setToggled] = useState(false)

  // const handleBucket = event => {
  //   console.log(event)
  //   if (event.currentTarget) {
  //     setToggled(!isToggled)
  //   }
  // }
  const handleBucket = () => setToggled(!isToggled)
  return (
    <section className={style.work_section}>
      <StaticQuery
        query={graphql`
          query {
            allDataJson(filter: { title: { eq: "Work Page" } }) {
              edges {
                node {
                  WelcomeText
                  content {
                    ProjectDetails
                    projectImage
                    projectName
                    projectPopButton
                    openDetails {
                      name
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {data.allDataJson.edges.map((data, id) => (
              <div key={1}>
                <div className={style.projectWrapper}>
                  {data.node.content.map((data, id) => {
                    return (
                      <React.Fragment key={uuidv4()}>
                        <div
                          role="button"
                          tabIndex="0"
                          key={id}
                          className={style.projectBucket}
                          onClick={handleBucket}
                          onKeyDown={handleBucket}
                        >
                          <h3>{data.projectName}</h3>
                          <p>{data.ProjectDetails}</p>
                          <button tabIndex="-1">{data.projectPopButton}</button>
                        </div>

                        <div key={uuidv4()} className={style.openDetails}>
                          <p>test test test</p>
                        </div>
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            ))}
          </>
        )}
      />
    </section>
  )
}

export default WorkPage
