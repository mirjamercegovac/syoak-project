import React from "react";
import './dataList.scss';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import Table from '../../table/Table';

const DataList = () => {

  return (
   <div className="dataList">
    <Sidebar />
    <div className="dataList__container">
      <Navbar />
      <div className="dataList__container__main">
        <Table />
      </div>
    </div>
    
   </div>
  );
};

export default DataList;