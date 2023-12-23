import React from "react";
import './messages.scss';
import avatarGirl from '../../../images/avatar-girl.svg';

const data = [
    { name: 'Jessica Smith', message: 'Good Morning!', time: '32MIN', color: 'green' },
    { name: 'Jessica Smith', message: 'Good Morning!', time: '32MIN', color: 'green' },
    { name: 'Jessica Smith', message: 'Good Morning!', time: '32MIN', color: 'green' },
    { name: 'Jessica Smith', message: 'Good Morning!', time: '32MIN', color: 'green' },
    { name: 'Jessica Smith', message: 'Good Morning!', time: '32MIN', color: 'green' },

];

const Messages = () => {

  return (
   <div className="main__messages">
    <h1 className="main__messages__title">Sales Report</h1>
    <table className="main__messages__table">
        <tbody className="main__messages__table__tbody">
            {data.map((item) => (
            <tr key={item.id} className="main__messages__table__tbody__tr">
                <td className="main__messages__table__tbody__tr__icon">
                    <img src={avatarGirl} alt="" />
                    <div className={`main__messages__table__tbody__tr__icon--${item.color}`}></div>
                </td>
                <td className="main__messages__table__tbody__tr__name">{item.name}
                <span className="main__messages__table__tbody__tr__name__message">{item.message}</span></td>
                <td className="main__messages__table__tbody__tr__time">
                    {item.time}</td>
            </tr>
            ))}
        </tbody>
    </table>

   </div>
  );
};

export default Messages;