import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../../services/auth";

const Nabvar = () => {

function logOut()
{
  AuthService.logout();
}

  return (
    <nav>
      <ul>
      <input type="checkbox" />
      <li className="toggler">
          <img src={require("../../assets/images/menu.png")} />
          <img src={require("../../assets/images/close.png")} />
        </li>  
        <li className="logo">
          <h1 className="logo">
            <NavLink className="navLink" to="/">
            <img src={require("../../assets/images/viking3.png")} /> Hkyatak
            {/* <img src={localStorage.getItem("ProfileImg")} /> */}
            </NavLink>
          </h1>
        </li>
        <li className="menu">
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
        </li>

        <li className="profile">
          <button className="light" onClick={logOut}>
            <NavLink className="navLink" to={localStorage.getItem("userToken")?"/":"/login"}>
            {localStorage.getItem("userToken")?"Logout":"Register"}
            </NavLink>
          </button>
          {/* <span class="name">Hello, John Doe</span>
                <img src="profile.png" alt="profil img"/> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nabvar;
