import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.png'
import program_2 from '../../assets/program_2.png'
import program_3 from '../../assets/program_3.png'
import program_icon_1 from '../../assets/program_icon_1.png'

const Programs = () => {
  return (
    <div className='programs'>  
        <div className="program">
            <img src={program_1} alt=""/>
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Vision</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt=""/>
        </div>
        <div className="program">
            <img src={program_3} alt=""/>
        </div>
    </div>
  )
}

export default Programs