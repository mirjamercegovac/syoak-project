import React from "react";
import './navbar.scss';

import { CgSearch } from "react-icons/cg";
import notification from '../../../images/notification.svg';
import avatar from '../../../images/Avatar.svg';
import search from '../../../images/Search.svg';

const Admin = () => {

    return (
     <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__container__search">
                <img src={search} alt=""/>
                <input type="text" placeholder="Search"></input>
            </div>
            <div className="navbar__container__items">
                <div className="navbar__container__items__notification">
                    <img src={notification} alt=""/>
                    <div className="navbar__container__items__notification__counter">1</div>
                </div>
                <div className="navbar__container__items__user">
                    <img src={avatar} alt=""/>
                </div>
            </div>
        </div>
     </div>
    );
  };
  
  export default Admin;