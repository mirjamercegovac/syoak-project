import React from 'react';
import './sidebar.scss';
import logoIcon from '../../../images/logo-icon.svg';
import home from '../../../images/home-icon.svg';
import search from '../../../images/search-icon.svg';
import graph from '../../../images/graph-icon.svg';
import user from '../../../images/user-icon.svg';
import { FaUser } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { LuLineChart } from "react-icons/lu";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logoIcon} alt="" />
      </div>
      <ul className="sidebar__menu">
        <li className="sidebar__menu__list--active">
          <a href="">
            {/* <img src={home} alt="" /> */}
            <BsSpeedometer2 className="sidebar__menu__list__icon--active"/>
          </a>
        </li>
        <li className="sidebar__menu__list">
          <a href="">
            {/* <img src={search} alt="" /> */}
            <AiOutlineFileSearch className="sidebar__menu__list__icon "/>
          </a>
        </li>
        <li className="sidebar__menu__list">
          <a href="">
            {/* <img src={graph} alt="" /> */}
            <LuLineChart className="sidebar__menu__list__icon "/>
          </a>
        </li>
        <li className="sidebar__menu__list">
          <a href="">
            {/* <img src={user} alt="" /> */}
            <FaUser className="sidebar__menu__list__icon "/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
