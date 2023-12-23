import React from "react";
import './providers.scss';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

const data = [
  { icon: 'I', name: 'INA d.d.', location: 'Zageb, Croatia ', color: 'dark-blue' },
  { icon: 'S', name: 'Shell', location: 'The Hague, Netherlands', color: 'red' },
  { icon: 'R', name: 'Repsol', location: 'Madrid, Spain', color: 'orange' },
  { icon: 'T', name: 'Total', location: 'Courbevoie, France', color: 'yellow' },
  { icon: 'C', name: 'Chevron	', location: 'San Ramon, United States', color: 'light-blue' },
  { icon: 'I', name: 'INA d.d.', location: 'Zageb, Croatia ', color: 'dark-blue' },
  
];

const Providers = () => {

  return (
    <div className="main__providers">
    <h1 className="main__providers__title">Oil & Gas Providers</h1>
      <table className="main__providers__table">
          <tbody className="main__providers__table__tbody">
              {data.map((item) => (
              <tr key={item.icon} className="main__providers__table__tbody__tr">
                  <td className="main__providers__table__tbody__tr__icon">
                    <div className={`main__providers__table__tbody__tr__icon__box--${item.color}`}>
                        <h3 className={`main__providers__table__tbody__tr__icon__box--${item.color}--char`}>{item.icon}</h3>
                    </div>
                  </td>
                  <td className="main__providers__table__tbody__tr__name">{item.name}</td>
                  <td className="main__providers__table__tbody__tr__location">
                      <PlaceRoundedIcon style={{width: '15px'}}/>{item.location}</td>
                  <td className="main__providers__table__tbody__tr__menu">
                    <ExpandMoreRoundedIcon />
                  </td>
              </tr>
              ))}
          </tbody>
      </table>
    
    
   </div>
  );
};

export default Providers;