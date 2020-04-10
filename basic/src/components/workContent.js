import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import style from "./work.module.scss"
import { v4 as uuidv4 } from "uuid"
import ProjectDetails from "./viewProjectDetails"

const WorkPage = props => {
  const [isToggled, setToggled] = useState(false)

  const handleBucket = event => {
    setToggled(!isToggled)
  }

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
                    id
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
                  {data.node.content.map((data, index) => {
                    let id_Num = parseFloat(index)
                    let data_id_Num = parseFloat(data.id)
                    return (
                      <React.Fragment key={uuidv4()}>
                        <div
                          key={data_id_Num}
                          data-id={data_id_Num}
                          className={style.project}
                        >
                          <div className={style.projectBucket}>
                            <h3>{data.projectName}</h3>
                            <p>{data.ProjectDetails}</p>

                            <button
                              onClick={event => {
                                let num = parseFloat(event.target.dataset.id)
                                if (num === id_Num) {
                                  console.log("here")

                                  event.target.parentNode.parentNode.classList.toggle(
                                    style["active"]
                                  )
                                }
                              }}
                              onKeyDown={handleBucket}
                              tabIndex="-1"
                              data-id={data_id_Num}
                            >
                              {data.projectPopButton}
                            </button>
                          </div>

                          <ProjectDetails
                            index={data_id_Num}
                            openDetails={data.openDetails}
                          />
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
