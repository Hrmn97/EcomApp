import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 mt-4'>
    <footer>
    <div className="grid grid-cols-4 gap-x-8 text-center">
    <div><h3>EcOM TECH CO. 2022</h3></div>
    <div><h3>Subscribe to emails for updates</h3>
    <form action="#">
    <input type="email" placeholder='your email'></input>
    <input type="submit"></input>
    </form>
    </div>
    <div className='flex flex-row place-content-around text-purple-500 mt-2'><h3>follow us</h3>
    <div><FaDiscord style={{width:30,height:30}}className="icons"/></div>
    <div><FaInstagram style={{width:30,height:30}}className="icons"/></div>
    <div><FaYoutube style={{width:30,height:30}}className="icons"/></div>
    </div>
    </div>
    </footer>
    </div>
  )
}

export default Footer