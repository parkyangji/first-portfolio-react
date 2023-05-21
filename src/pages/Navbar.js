import React, {useEffect, useState} from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  const navs = ['Home', 'About', 'Skills', 'Portfolio'];

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 20)
    })
  },[])

  return (
    <header className={scroll ? "active" : ""}>
      <div className='header_inner'>
        <h1>parkyangji</h1>
        <nav>
          <h2 className="hidden">Navbar</h2>
          <ul>
            {
              navs.map((navlist, index) => {
                return (<li key={index}><h3><a href={`#${navlist}`}>{navlist}</a></h3></li>)
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar