import React from 'react'
import {FiGithub, FiEye} from "react-icons/fi"

const Tabcontent = (props) => {
  return (
    <div className="tabContent">
      <div className="port_img">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="port_info">
        <dl>
          <dt>{props.name}</dt>
          <dd>{props.type}</dd>
          <dd>{props.long} (제작기간)</dd>
        </dl>
        <div className="url_box">
          <a href={props.host_url} target="_blank" rel="noopener noreferrer"><FiEye/></a>
          <a href={props.git_url} target="_blank" rel="noopener noreferrer"><FiGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Tabcontent