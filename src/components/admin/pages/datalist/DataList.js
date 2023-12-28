import React from "react";
import '../../pages/pages.scss';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import Table from '../../table/Table';

const DataList = () => {

  return (
   <div className="page">
    <Sidebar />
    <div className="page__container">
      <Navbar />
      <div className="page__container__main">
        <Table />
      </div>
    </div>
    
   </div>
  );
};

export default DataList;