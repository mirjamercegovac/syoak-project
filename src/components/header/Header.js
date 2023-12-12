import React, { useState } from "react";
import './header.scss';
import logo from "../../images/logo.png";
import icon from "../../images/Vector.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="vertical-line"></div>

      <div className="hamburger" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={isNavOpen ? "nav active" : "nav"}>
        <nav className="navbar">
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">About us</a>
          <a href="">Blog</a>
        </nav>
          
        <div className="right">
          <a className="button-text">
            <img src={icon} alt=""/> Log in 
          </a>
          <a className="button-text">
            <FontAwesomeIcon className="font-icon" icon={faPaperPlane} style={{ color:  '#0052B4', width: '19px', height: '18.43px' }} /> Contact us
          </a>
          <a className="button">Sign up</a>
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;