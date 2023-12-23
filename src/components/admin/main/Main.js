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

      <div className="main__box">

        <div className="main__box__left">
           <Cards />
           <Statistics /> 
        </div>
        <div className="main__box__right">
            <Sales />
        </div>
    </div>
    <div className="main__bottom">

      <div className="main__bottom__left">
          <Providers />
          <Activity />
      </div>
      <div className="main__bottom__right">
        <Messages />
      </div>
          
          
    </div>
        
  </div>

  
  );
};

export default Main;