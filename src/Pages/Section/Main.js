import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-12 max-w-7xl max-h-5 m-14 mb-52">
    <div className='ml-52'>
    <p>WELCOME TO</p>
    <h1 className='text-2xl font-bold '>E-STORE</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <NavLink>
    <button  className="bg-sky-300 rounded-full">SHOP NOW</button>
    </NavLink>
    </div>
  
    <div >
    <figure>
    <img style={{ width: 400, height: 200 }} src='./images/shop.png' alt="SHOP" />
    </figure>
    </div>
    </div>
  )
}

export default Main