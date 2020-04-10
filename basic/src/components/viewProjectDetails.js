import React from "react"
import style from "./work.module.scss"
import { v4 as uuidv4 } from "uuid"

function ProjectDetails(props) {
  return (
    <React.Fragment key={uuidv4()}>
      {props.openDetails.map((data, index) => {
        return (
          <div key={uuidv4()} className={`${style.viewDetails}`}>
            {data.name}
          </div>
        )
      })}
    </React.Fragment>
  )
}
export default ProjectDetails
