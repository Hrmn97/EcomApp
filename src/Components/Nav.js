import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'

const Nav = () => {
  return (
    <div className='md:flex md:items-center md:my-0 flex-row justify-end space-x-20 space-y-4 mr-28 text-lg font-mono underline underline-offset-2'>

    <div></div>
        <div className='hover:bg-sky-700' >
        <NavLink to="/" >Home</NavLink>
        </div>
         
         <div className='hover:bg-sky-700'>
         <NavLink to="/about" >About</NavLink>
         </div>
         
         <div className='hover:bg-sky-700'>
         <NavLink to="/products" >Products</NavLink>
         </div>
         
         <div className='hover:bg-sky-700'>
         <NavLink to="/contact" >Contact</NavLink>
         </div>
        
         <div className='hover:bg-sky-700'>
         <NavLink to="/cart" >
         <FiShoppingCart />
         </NavLink>
         </div>
         
        
    </div>
  )
}

export default Nav