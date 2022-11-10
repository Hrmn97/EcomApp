import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='text-center leading-loose mb-96 mt-24'>
    <h2 className='text-2xl font-extrabold'>404</h2>
    <h2 className='font-bold'>UH OH YOU ARE LOST</h2>
    <h3>THE page you are looking for does not exist. Kindly click on below button to go to Home</h3>


    <NavLink to="/">
    <button className='rounded-full bg-slate-300'>GO BACK TO HOME</button>
    </NavLink>   
    </div>
  )
}

export default ErrorPage