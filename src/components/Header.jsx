import React from 'react'
import { Link } from 'react-router-dom'

import "../index.css"
import "./Header.css"

import logo from "../assets/dp-square.png"

function Header() {
  return (
    <>
        <header className='horizontal--flex'>
            <Link to="/" className="logo--container">
                <img src={logo} alt="tasteofmadras" />
            </Link>
            
            <div className="pages--bar horizontal--flex">
                <Link to="/" className='pages--text'>Home</Link>
                <Link to="/about" className='pages--text'>About</Link>
                <Link to="/menu" className='pages--text'>Menu</Link>
                <Link to="/gallery" className='pages--text'>Gallery</Link>
                <Link to="/testimonials" className='pages--text'>Testimonials</Link>
                <Link to="/blogs" className='pages--text'>Blogs</Link>
            </div>

            <a href="#" className="book--a--table--button">Book a Table!</a>
        </header>
    </>
  )
}

export default Header