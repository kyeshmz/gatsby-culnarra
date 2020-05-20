import React from "react"

export const ColorBar = props => {
  return (
    <div className="bar-wrap">
      <hr className={props}></hr>
      <hr className="og-bar"></hr>
      <style jsx>{`
        .bar-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          hr {
            width: 50%;
            &:first-child {
              height: 4px;
            }
          }
        }
        .card {
          background-color: #6846ff;
        }
        .project {
          background-color: #ff921e;
        }
        .note {
          background-color: #22b473;
        }
        .event {
          background-color: #878787;
        }
        .og-bar {
          background-color: #878787;
          height: 2px;
          width: 50%;
          margin-top: 1.5px;
          margin-bottom: 1.5px;
        }
      `}</style>
    </div>
  )
}
