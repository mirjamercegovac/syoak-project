import React from "react";
import './admin.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';

const Admin = () => {

  return (
   <div className="home">
    <Sidebar />
    <div className="home__container">
      <Navbar />
      <div className="home__container__main">
        <Main />
      </div>
    </div>
    
   </div>
  );
};

export default Admin;