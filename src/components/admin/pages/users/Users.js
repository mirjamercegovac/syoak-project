import React from "react";
import '../../pages/pages.scss';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import TableUsers from '../../table/TableUsers';

const Users = () => {

  return (
   <div className="page">
    <Sidebar />
    <div className="page__container">
      <Navbar />
      <div className="page__container__main">
        <TableUsers />
      </div>
    </div>
    
   </div>
  );
};

export default Users;