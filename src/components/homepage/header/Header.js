import React, { useState } from "react";
import './header.scss';
import logo from "../../../images/logo.png";
import icon from "../../../images/Vector.svg";
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
      <div className="header__vertical-line"></div>

      <div className="header__hamburger" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={isNavOpen ? "header__nav active" : "header__nav"}>
        <nav className="header__nav__navbar">
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">About us</a>
          <a href="">Blog</a>
        </nav>
          
        <div className="header__nav__right">
          <a href="/login" className="header__nav__right__button-text" >
            <img src={icon} alt=""/> Log in 
          </a>
          <a className="header__nav__right__button-text">
            <FontAwesomeIcon className="header__nav__right__font-icon" icon={faPaperPlane} style={{ color:  '#0052B4', width: '19px', height: '18.43px' }} /> Contact us
          </a>
          <a href="/signup" className="header__nav__right__button">Sign up</a>
          {/* <a href="/admin" className="header__nav__right__button">Admin</a> */}
          
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;