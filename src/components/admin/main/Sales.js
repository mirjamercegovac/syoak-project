import React from "react";
import './sales.scss';

const data = [
    { id: 1, provider: 'CHEVRON', stats: '$1.58 (+2.1%)' },
    { id: 2, provider: 'SHELL', stats: '$1.58 (+2.1%)' },
    { id: 3, provider: 'TOTAL', stats: '$1.58 (+2.1%)' },
    { id: 4, provider: 'REPSOL', stats: '$1.58 (+2.1%)' },
    { id: 5, provider: 'INA', stats: '$1.58 (+2.1%)' },
    { id: 6, provider: 'SHELL', stats: '$1.58 (+2.1%)' },
    { id: 7, provider: 'TOTAL', stats: '$1.58 (+2.1%)' },
    { id: 8, provider: 'CHEVRON', stats: '$1.58 (+2.1%)' },
    { id: 9, provider: 'INA', stats: '$1.58 (+2.1%)' },
];

const Sales = () => {

  return (
   <div className="main__sales">
    <h1 className="main__sales__title">Sales Report</h1>
    <table className="main__sales__table">
        <thead className="main__sales__table__thead">
            <tr className="main__sales__table__thead__tr">
            <th>#</th>
            <th>PROVIDER</th>
            <th>STATS</th>
            </tr>
        </thead>
        <tbody className="main__sales__table__tbody">
            {data.map((item) => (
            <tr key={item.id} className="main__sales__table__tbody__tr">
                <td className="main__sales__table__tbody__tr__td">0{item.id}</td>
                <td className="main__sales__table__tbody__tr__td">{item.provider}</td>
                <td className="main__sales__table__tbody__tr__td--green">
                    {item.stats}</td>
            </tr>
            ))}
        </tbody>
    </table>

   </div>
  );
};

export default Sales;