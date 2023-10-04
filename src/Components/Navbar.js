import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <span>The</span>  <span style={{color:'#6C63FF', background:'#f3f3f3'}}>Ultimate</span> <span>Dictionary</span>
      </div>
      <div className="menu">
        <p><NavLink to="/">Home</NavLink></p>
        <p><NavLink to="/history">History</NavLink></p>
      </div>
    </nav>
  )
}

export default Navbar;