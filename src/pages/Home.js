import React from 'react'
import '../styles/Home.css'
import Typing from '../components/Typing'

const Home = () => {
  return (
    <section id='Home'>
      <h2 className='hidden'>Home</h2>

      <Typing text="안녕하세요. 박양지입니다." speed={150} fontSize="4rem" color="var(--main-color)" />

    </section>
  )
}

export default Home