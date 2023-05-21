import React from 'react'
import '../styles/Skills.css'
import { SkillData } from '../MyData'

const Skills = () => {
  return (
    <section id="Skills">
      <h2>Skills</h2>
      <ul className='skills'>
        {
          SkillData.map((icon, index) => {
            return (
              <li key={index}>
                {icon}
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Skills