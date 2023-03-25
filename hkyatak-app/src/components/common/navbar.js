import React from "react"
import { Link, NavLink } from "react-router-dom";

const Nabvar = () => {
return(
<nav>
      <h1 className="logo">
      <NavLink
              className="navLink"
              to="/"
            >
              Hkyatak
            </NavLink>
      </h1>
  <ul className="navbar">
  <li>
  <NavLink
              className={({ isActive }) => (isActive ? "active" : "navLink")}
              to="/"
            >
              Home
            </NavLink>
  </li>
  <li>
  <NavLink
              className={({ isActive }) => (isActive ? "active" : "navLink")}
              to="/about"
            >
              About
  </NavLink>
  </li>
  <li>
  <NavLink
              className={({ isActive }) => (isActive ? "active" : "navLink")}
              to="/contact"
            >
              Contact
  </NavLink>
  </li>

  </ul>
  
  <button className="light">
  <NavLink
              className= "navLink"
              to="/signup"
            >
             Register
  </NavLink>  
  </button>
</nav>
)
}

export default Nabvar;