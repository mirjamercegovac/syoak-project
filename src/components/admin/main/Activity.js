import React from "react";
import './activity.scss';
import { PiArrowUpRightFill } from "react-icons/pi";

const data = [
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  { time: '16:38', text: 'John Doe', price: 'Price change'},
  
];

const Activity = () => {

  return (
    <div className="main__activity">
    <h1 className="main__activity__title">Activity <span>this month</span></h1>
      <table className="main__activity__table">
          <tbody className="main__activity__table__tbody">
              {data.map((item) => (
              <tr key={item.icon} className="main__activity__table__tbody__tr">
                  
                  <td className="main__activity__table__tbody__tr__time">{item.time}</td>
                  <td className="main__activity__table__tbody__tr__icon">
                    <div className="main__activity__table__tbody__tr__icon__box">
                       <PiArrowUpRightFill className="main__activity__table__tbody__tr__icon__box__arrow"/>
                    </div>
                  </td>
                  <td className="main__activity__table__tbody__tr__text">
                    Updated List
                    <span className="main__activity__table__tbody__tr__text__name">{item.text}</span>
                  </td>
                  <td className="main__activity__table__tbody__tr__price">
                  {item.price}
                  </td>
              </tr>
              ))}
          </tbody>
      </table>
    
    
   </div>
  );
};

export default Activity;