import React from "react";
import '../../pages/pages.scss';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import Main from '../../main/Main';

const Admin = () => {

  return (
   <div className="page">
    <Sidebar />
    <div className="page__container">
      <Navbar />
      <div className="page__container__main">
        <Main />
      </div>
    </div>
    
   </div>
  );
};

export default Admin;