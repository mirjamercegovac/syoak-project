import React from "react";
import './footer.scss';
import logo from '../../images/logo.png';
import path from '../../images/Path.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function Footer() { 
  return (
    <section className="footer section">

      <div className="box-container">
      <span className="line"></span>
        <div className="box-left">
          <div className="info">
            <h3><img src={logo} /></h3>
            <p>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond</p>
          </div>
          
          <div className="links">
              <a href=""><FontAwesomeIcon icon={faLocationDot} className="icon-font"/> 1182  Williams Avenue, San Francisco</a>
              <a href=""><img src={path} className="icon-mui"/> hello@syoak.com</a>
          </div>
        </div>

        <div className="box-right">
          <div className="link">
            <h3>Company</h3>
            <div className="links">
              <a href="">About Us</a>
              <a href="">Company</a>
              <a href="">How we do it</a>
            </div>
          </div>
          <div className="link">
            <h3>Services</h3>
            <div className="links">
              <a href="">Oil & Gas Industry</a>
              <a href="">Fuel Management</a>
              <a href="">Chemical Research</a>
              <a href="">Power & Energy</a>
              <a href="">Eco & Biopower</a>
            </div>
          </div>
          <div className="link">
            <h3>Projects</h3>
            <div className="links">
              <a href="">Factory</a>
              <a href="">Industry</a>
              <a href="">Manufactoring</a>
              <a href="">Mechanical</a>
            </div>
          </div>
          
        </div>

      </div>

      <div className="credit">
        <span className="line"></span>
        <div className="left">
          Copyright (c) 2019 syoak.com All rights reserved.
        </div>
        <div className="right">
          <span>Support</span>
          <span>Privacy Policy</span>
          <span>Terms of Condition</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;