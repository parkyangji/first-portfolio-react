import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const navs = ['Home', 'About', 'Skills', 'Portfolio'];

  return (
    <header>
      <h1>parkyangji</h1>
      <nav>
        <h2 className="hidden">Navbar</h2>
        <ul>
          {
            navs.map((navlist, index) => {
              return (<li key={index}><h3><a href={`${navlist}`}>{navlist}</a></h3></li>)
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar