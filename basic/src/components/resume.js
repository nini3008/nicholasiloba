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
                  linkedin
                }
                Experience {
                  duties
                  jobTitle
                  year
                  company
                  city
                }
                skillActions
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
        <div className={style.resume_bg}>
          {data.allDataJson.edges.map((data, id) => (
            <div key={1} className={style.resume_section}>
              <div className={style.name_wrapper}>
                <div>
                  <span>{data.node.description[0].name}</span>
                  <span>{data.node.description[0].jobTitle}</span>
                </div>
                <div className={style.contact}>
                  <p>Phone: {data.node.Personal[0].phone}</p>
                  <p>Email: {data.node.Personal[0].email}</p>
                </div>
              </div>
              <div className={style.objective}>
                <p>{data.node.description[0].objective}</p>
              </div>
              <div className={style.resume_wrapper}>
                <div className={style.leftSide_resume}>
                  <div className={style.experienceWrapper}>
                    {data.node.Experience.map((data, id) => {
                      return (
                        <div className={style.experience_list} key={id}>
                          <div className={style.list_detail}>
                            <div className={style.top_details}>
                              <div className={style.list_company_name}>
                                <h4>{data.company}</h4>
                                <p>{data.jobTitle}</p>
                              </div>
                              <div className={style.list_city_name}>
                                <p className={style.list_city}>{data.city}</p>
                                <p className={style.list_year}>{data.year}</p>
                              </div>
                            </div>
                            {data.duties.map((duty, id) => {
                              return <p key={id}>{duty}</p>
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className={style.rightSide_resume}>
                  <div className={`${style.educationWrapper} ${style.blueBar}`}>
                    {data.node.Education.map((data, id) => {
                      return (
                        <div className={style.education_list} key={id}>
                          <div className={style.list_detail}>
                            <h4>{data.degree}</h4>
                            <p>
                              {data.school}. {data.year}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div
                    className={`${style.skillsAction} ${style.skills} ${style.blueBar}`}
                  >
                    <h4>Key Skills</h4>
                    <ul>
                      {data.node.skillActions.map((list, id) => {
                        console.log(list)
                        return <li key={id}>{list}</li>
                      })}
                    </ul>
                  </div>

                  <div
                    className={`${style.skillsWrapper} ${style.skills} ${style.blueBar}`}
                  >
                    <h4>Technical Skills</h4>
                    {data.node.skills.map((list, id) => {
                      return <p key={id}>{list}</p>
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default ResumePage
