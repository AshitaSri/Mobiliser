import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarStyles.css";
import "./DropdownStyles.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">EduTech</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <div className="nav-item">
          <li>
            <button onClick={() => navigate("/")} className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              Home
            </button>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <button onClick={() => navigate("/about")} className="nav-links">
              <i className="fa-solid fa-circle-info"></i>
              About
            </button>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <button onClick={() => navigate("/service")} className="nav-links">
              <i className="fa-solid fa-briefcase"></i>
              Service
            </button>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <button onClick={() => navigate("/contact")} className="nav-links">
              <i className="fa-solid fa-address-book"></i>
              Contact
            </button>
          </li>
        </div>
        <div className="nav-item">
          <li>
            <button onClick={() => navigate("/login-user")} className="nav-links">
              <i className="fa-solid fa-user"></i>
              Sign In
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
