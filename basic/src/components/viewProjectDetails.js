import React from "react"
import style from "./work.module.scss"
import { v4 as uuidv4 } from "uuid"

const handleClose = e => {
  console.log(e.target.parentNode)
  e.target.parentNode.classList.remove(style["active"])
}

function ProjectDetails(props) {
  return (
    <React.Fragment key={uuidv4()}>
      {props.openDetails.map((data, index) => {
        return (
          <React.Fragment key={uuidv4()}>
            <div key={uuidv4()} className={`${style.viewDetails}`}>
              {data.name}
            </div>
            <span
              key={uuidv4()}
              onClick={handleClose}
              onKeyDown={props.handleClose}
              tabIndex="-1"
              data-id={props.data_id_Num}
              role="button"
            >
              x
            </span>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
export default ProjectDetails
