import React from 'react'
import {MyData} from '../MyData'
import '../styles/About.css'

const About = () => {

  return (
    <section id="About">
      <h2>About</h2>
      <div className="about_content">
        <div className="photo">
          <img src={MyData.imgsrc} alt="" />
        </div>
        <div className="intro">
          <ul>
            <li><span>이름</span>{MyData.name}</li>
            <li><span>지원부문</span>{MyData.appliance}</li>
            <li><span>생년월일</span>{MyData.date_of_birth}</li>
            <li><span>휴대폰</span>{MyData.phone}</li>
            <li><span>이메일</span>{MyData.email}</li>
          </ul>
          <div className="btn_box">
            <a href='#'>resume</a>
            <a href='#'>github</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About