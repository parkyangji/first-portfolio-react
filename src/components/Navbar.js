import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const navs = ['Home', 'About', 'Skills', 'Portfolio'];

  return (
    <header>
      <h1>parkyangji</h1>
      <nav>
        <ul>
          {
            navs.map((navlist, index) => {
              return (<li key={index}><a href={`${navlist}`}>{navlist}</a></li>)
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar