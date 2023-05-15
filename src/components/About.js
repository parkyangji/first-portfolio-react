import React from 'react'
import {MyData} from './MyData'
import './About.css'

const About = () => {

  return (
    <section>
      <h2>About</h2>
      <div className="about_content">
        <div className="photo">
          <img src={MyData.imgsrc} alt="" />
        </div>
        <div className="intro">
          <ul>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default About