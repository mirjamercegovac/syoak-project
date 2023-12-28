// import React from 'react';
// import './sidebar.scss';
// import logoIcon from '../../../images/logo-icon.svg';
// import home from '../../../images/home-icon.svg';
// import search from '../../../images/search-icon.svg';
// import graph from '../../../images/graph-icon.svg';
// import user from '../../../images/user-icon.svg';
// import { FaUser } from "react-icons/fa";
// import { AiOutlineFileSearch } from "react-icons/ai";
// import { BsSpeedometer2 } from "react-icons/bs";
// import { LuLineChart } from "react-icons/lu";


// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar__logo">
//         <img src={logoIcon} alt="" />
//       </div>
//       <ul className="sidebar__menu">
//         <li className="sidebar__menu__list--active">
//           <a href="/admin">
//             {/* <img src={home} alt="" /> */}
//             <BsSpeedometer2 className="sidebar__menu__list__icon--active"/>
//           </a>
//         </li>
//         <li className="sidebar__menu__list">
//           <a href="/datalist">
//             {/* <img src={search} alt="" /> */}
//             <AiOutlineFileSearch className="sidebar__menu__list__icon "/>
//           </a>
//         </li>
//         <li className="sidebar__menu__list">
//           <a href="">
//             {/* <img src={graph} alt="" /> */}
//             <LuLineChart className="sidebar__menu__list__icon "/>
//           </a>
//         </li>
//         <li className="sidebar__menu__list">
//           <a href="">
//             {/* <img src={user} alt="" /> */}
//             <FaUser className="sidebar__menu__list__icon "/>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;



import React, { useState } from 'react';
import './sidebar.scss';
import logoIcon from '../../../images/logo-icon.svg';
import { FaUser } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { LuLineChart } from "react-icons/lu";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    window.history.pushState({}, '', path);
  };

  const dataList = [
    { path: '/admin', icon: <BsSpeedometer2 /> },
    { path: '/datalist', icon: <AiOutlineFileSearch /> },
    { path: '/graph', icon: <LuLineChart /> },
    { path: '/users', icon: <FaUser /> },
    // Add more items as needed
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logoIcon} alt="" />
      </div>
      <ul className="sidebar__menu">
        {dataList.map(({ path, icon }, index) => (
          <li key={index} className={`sidebar__menu__list ${activeLink === path ? 'sidebar__menu__list--active' : ''}`}>
            <a href={path} onClick={() => handleLinkClick(path)}>
              {React.cloneElement(icon, { className: `sidebar__menu__list__icon ${activeLink === path ? 'sidebar__menu__list__icon--active' : ''}` })}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;