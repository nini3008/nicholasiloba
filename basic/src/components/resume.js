import React from "react"
import { StaticQuery, graphql } from "gatsby"
import style from "./resume.module.scss"

const ResumePage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allDataJson(filter: { title: { eq: "Resume Page" } }) {
            edges {
              node {
                description {
                  name
                  objective
                  jobTitle
                }
                skills
                Personal {
                  Address
                  email
                  phone
                }
                Experience {
                  duties
                  jobTitle
                  year
                }
                Education {
                  degree
                  school
                  year
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {data.allDataJson.edges.map((data, id) => (
            <div key={1} className={style.resume_section}>
              <div className={style.resume_wrapper}>
                <div className={style.leftSide_resume}>
                  <h1>{data.node.description[0].name}</h1>
                  <h4>{data.node.description[0].jobTitle}</h4>
                  <div className={style.objective}>
                    <h2>Objective</h2>
                    <p>{data.node.description[0].objective}</p>
                  </div>

                  <div className={style.experienceWrapper}>
                    <h2>Experience</h2>
                    {data.node.Experience.map((data, id) => {
                      return (
                        <div className={style.experience_list} key={id}>
                          <span className={style.list_year}>{data.year}</span>
                          <div className={style.list_detail}>
                            <h4>{data.jobTitle}</h4>
                            <ul>
                              {data.duties.map((duty, id) => {
                                return <li key={id}>{duty}</li>
                              })}
                            </ul>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className={style.educationWrapper}>
                    <h2>Education</h2>
                    {data.node.Education.map((data, id) => {
                      return (
                        <div className={style.education_list} key={id}>
                          <span className={style.list_year}>{data.year}</span>
                          <div className={style.list_detail}>
                            <h4>{data.school}</h4>
                            <p>{data.degree}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={style.rightSide_resume}>
                  <h2>Personal Info</h2>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    />
  )
}

export default ResumePage
