import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink() {
  return (
    <><li><NavLink to="/" className={({isActive})=>` hover:text-blue-700 ${(isActive)?"text-blue-800":"text-gray-900"}`}
                    
    >Home</NavLink></li>
    <li><NavLink className={({isActive})=>` hover:text-blue-700 ${(isActive)?"text-blue-800":"text-gray-900"}`} to="/About">About</NavLink></li>
    <li><NavLink className={({isActive})=>` hover:text-blue-700 ${(isActive)?"text-blue-800":"text-gray-900"}`} to="/Skill">Skill</NavLink></li>
    <li><NavLink className={({isActive})=>` hover:text-blue-700 ${(isActive)?"text-blue-800":"text-gray-900"}`} to="/Project">Project</NavLink></li>
   </>
  )
}

export default Navlink