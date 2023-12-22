import React from "react";
import './cards.scss';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';


const cardData = [
    { title: 'Motor Gasoline', price: '$1.58', percentage: '-6%', isPositive: true },
    { title: 'Autogas', price: '$0.98', percentage: '+2%', isPositive: false },
    { title: 'Fuel Oil', price: '$0.74', percentage: '+2%', isPositive: false },
];

const Cards = () => {

  return (
 
    
    <div className="main__left__cards">
        <div className="main__left__cards__card main__left__cards__card--blue">
            <div className="main__left__cards__card__content main__left__cards__card--blue__content">
                <div className="main__left__cards__card--blue__content__title">
                    <h2>Diesel Fuel</h2>
                </div>
                <div className="main__left__cards__card--blue__content__title">
                    <h1>$1.96</h1>
                    <h3>AVG PRICE</h3>
                </div>
            </div>
            <Chart />
        </div>

        {cardData.map((card, index) => (
        <div key={index} className="main__left__cards__card">
            <div className="main__left__cards__card__content">
            <div className="main__left__cards__card__content__title">
                <h2>{card.title}</h2>
            </div>
            <div className="main__left__cards__card__content__title">
                <h1>{card.price}</h1>
                <div className="main__left__cards__card__content__title__price">
                <h3>AVG PRICE</h3>
                {card.percentage && (
                    <p className={`main__left__cards__card__content__title__price--${card.isPositive ? 'green' : 'red'}`}>
                    <FontAwesomeIcon icon={card.isPositive ? faArrowDownLong : faArrowUpLong} 
                        className="main__left__cards__card__content__title__price__icon"/> {card.percentage}
                    </p>
                )}
                </div>
            </div>
            </div>
        </div>
        ))}

        
    </div> 
    
    

  );
};

export default Cards;