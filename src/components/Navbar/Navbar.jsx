import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const onHomePage = location.pathname === "/"

  return (
    <nav>
      <div className="nav-inner container">
        <Link to="/" className="logobtn" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="GYL Logo" className="logo" />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

        <ul className={menuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          {onHomePage && (
            <>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About us</a></li>
              <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
              <li><a href="#volunteering" onClick={() => setMenuOpen(false)}>Volunteering</a></li>
              <li><a href="#pamphlets" onClick={() => setMenuOpen(false)}>Pamphlets</a></li>
            </>
          )}

          <li>
            <Link to="/register" className="btn-outline" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/donations" className="btn" onClick={() => setMenuOpen(false)}>
              Donations
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
