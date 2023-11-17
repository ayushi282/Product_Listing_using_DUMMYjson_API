import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
      <li> <Link to={'ProductD'}> ProductD</Link></li>
      <li> <Link to={'Login'} > Login</Link></li>
       </ul></nav>
  )
}

export default Navbar
