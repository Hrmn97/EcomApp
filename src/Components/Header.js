import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"

const Header = () => {
  return (
    
    <div className="md:flex md:items-center">
        <div className="flex-none">
            <NavLink>
                <img style={{ width: 150, height: 80 }} src="./images/just.png" alt="JUST"/>
            </NavLink>
        </div>
        <div className="flex-auto w-64">
           <Nav />
        </div>
    </div>
  )
}

export default Header