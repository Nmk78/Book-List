import React from 'react'
import hero_min from '../assets/hero_min.gif'

const Home = () => {
  return (
    <div className='container h-full mx-auto flex flex-col justify-center items-center'>
      <img src={hero_min} alt="hero gif" className='mx-auto' />
      <div className='text-3xl font-bold font-italic text-center m-2 text-orange-500'>
      Orgnize Your Books
      </div>
    </div>
  )
}

export default Home