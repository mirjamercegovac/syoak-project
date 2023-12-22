import React from "react";
import './main.scss';
import Cards from './Cards';
import Statistics from './Statistics';
import Sales from './Sales';
import Providers from './Providers';
import Activity from './Activity';
import Messages from './Messages';

const Main = () => {

  return (
   <div className="main">

    <div className="main__left">
        <Cards />
        <Statistics />
        <Providers />
        <Activity />
    </div>

    <div className="main__right">
        <Sales />
    </div>
    
    
   </div>
  );
};

export default Main;