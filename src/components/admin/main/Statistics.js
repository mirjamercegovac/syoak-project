import React from "react";
import './statistics.scss';
import ChartS from './ChartS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import illustration from '../../../images/illustration.svg';

const dataStatistics = [
    { icon: 'C', name: 'CHEVRON', price: '$1.80', percentage: '-6' , isPositive: true, color: 'blue'},
    { icon: 'C', name: 'SHELL', price: '$1.92', percentage: '+11', isPositive: false, color: 'red' },
    { icon: 'C', name: 'TOTAL', price: '$1.88', percentage: '+6', isPositive: false, color: 'yellow' },
  ];

const Statistics = () => {

  return (

    <div className="main__left__statistic">
        <h1>Price Statistics</h1>
        <div className="main__left__statistic__data">
            <div className="main__left__statistic__data__chart">
                <ChartS />

                <div className="main__left__statistic__data__chart__div">
                {dataStatistics.map((item, index) => (
                    <div key={index} className="main__left__statistic__data__chart__div__box">
                    <div className={`main__left__statistic__data__chart__div__box__icon--${item.color}`}>
                        <h3 className={`main__left__statistic__data__chart__div__box__icon--${item.color}--char`}>{item.icon}</h3>
                    </div>
                    <div className="main__left__statistic__data__chart__div__box__info">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                    <div className={`main__left__statistic__data__chart__div__box__perc`}>
                        <h3 className={`main__left__statistic__data__chart__div__box__perc--${item.isPositive ? 'green' : 'red'}`}>
                        <FontAwesomeIcon icon={item.isPositive ? faArrowDownLong : faArrowUpLong} /> {item.percentage}%
                        </h3>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="main__left__statistic__data__image">
                <img src={illustration} alt="" />
                <p className="main__left__statistic__data__image__text">Find the best gas prices in your state to 
                    maximize savings at the pump.</p>
                <a href="" className="main__left__statistic__data__image__btn">Find prices</a>
            </div>

            
        </div>

        
       
    </div>

  );
};

export default Statistics;