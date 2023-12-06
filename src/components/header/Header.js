import React from "react";
import './header.scss';
import logo from "../../images/logo.png";
import icon from "../../images/Vector.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Header = () => {
  return (
    <header className="header">
      <img src={logo}/>
      <div className="vertical-line"></div>

      <div className="nav">
        <nav className="navbar">
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">About us</a>
          <a href="">Blog</a>
        </nav>
          
        <div className="right">
          <a className="button-text">
            <img src={icon}/> Log in 
          </a>
          <a className="button-text">
            <FontAwesomeIcon icon={faPaperPlane} style={{ color:  '#0052B4', width: '19px', height: '18.43px' }} /> Contact us
          </a>
          <a className="button">Sign up</a>
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;