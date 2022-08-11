import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from "../../assets/rightArrow.png"
const Programs = () => {
  console.log(programsData[0].heading)
  return (
      <div className="Programs" id="programs">
        <div className="programs--header">
          <span className='stroke--text'>Explre our</span>
          <span>Programs</span>
          <span className='stroke--text'>to Shape you</span>
        </div>

        <div className="program--catogary">
          {
            programsData.map((program)=>(
              <div className="catogary">
                {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join--now">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
              </div>
            ))
          }
        </div>

      </div>
  )
}

export default Programs