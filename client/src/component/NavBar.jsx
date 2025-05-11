import React from 'react'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/searchIcon.svg'
import {NavLink}  from "react-router-dom"
function NavBar() {
    return (
        <div className='flex justify-between items-center pt-8 w-[80%] m-auto text-white'>
      <img src={logo} />
            <div className='flex gap-8 text-[20px]'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/hotels">Hotels</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/experience">Experience</NavLink>
                <button>List Your Hotel</button>
            </div>
            <div className='flex gap-4'>
                <img src={searchIcon} className='w-8 cursor-pointer'/>
                <button className='border-2 px-3 rounded-[10px]'>Login</button>
            </div>
        </div>
   
  )
}

export default NavBar