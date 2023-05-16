import React, { useState } from 'react'
import Tabcontent from '../components/Tabcontent'
import {PortfolioData} from '../MyData'
import '../styles/Portfolio.css'

const Portfolio = () => {
  const [tab, setTab] = useState(0);

  const activeTab = (index) => {
    setTab(index);
  }

  return (
    <section id="Portfolio">
      <h2>Portfolio</h2>
      <ul className="tabMenu">
        {
          PortfolioData.map((data, index) => {
            return (
              <li 
              key={index}
              onClick={() => {activeTab(index)} }
              className={tab === index ? "active" : ""}>{data.type}</li>
            )
          })
        }
      </ul>
      <Tabcontent 
        type={PortfolioData[tab].type}
        name={PortfolioData[tab].name}
        long={PortfolioData[tab].long}
        imgsrc={PortfolioData[tab].imgsrc}
        host_url={PortfolioData[tab].host_url}
        git_url={PortfolioData[tab].git_url}
      />
    </section>
  )
}

export default Portfolio