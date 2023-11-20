import React from 'react'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav-container'>
        <Link to="/">
             <div className="logo-container">
                    <img className="logo" src={logo} alt="nav-logo" />
            </div>
        </Link>
        
        <div className="nav-link-container">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="about" className='nav-link'>About</Link>
        </div>

    </nav>
  )
}

export default Navbar