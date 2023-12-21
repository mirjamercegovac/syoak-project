import React from "react";
import './main.scss';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';


const Cards = () => {

  return (
 
    
    <div className="main__cards">
        <div className="main__cards__card main__cards__card--blue">
            <div className="main__cards__card__content main__cards__card--blue__content">
                <div className="main__cards__card--blue__content__title">
                    <h2>Diesel Fuel</h2>
                </div>
                <div className="main__cards__card--blue__content__title">
                    <h1>$1.96</h1>
                    <h3>AVG PRICE</h3>
                </div>
            </div>
            <Chart />
        </div>
        <div className="main__cards__card">
            <div className="main__cards__card__content">
                <div className="main__cards__card__content__title">
                    <h2>Motor Gasoline</h2>
                </div>
                <div className="main__cards__card__content__title">
                    <h1>$1.58</h1>
                    <div className="main__cards__card__content__title__price">
                        <h3>AVG PRICE</h3>
                        <p className="main__cards__card__content__title__price--green"><FontAwesomeIcon icon={faArrowDownLong} 
                        className="main__cards__card__content__title__price__icon"/> -6%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main__cards__card">
            <div className="main__cards__card__content">
                <div className="main__cards__card__content__title">
                    <h2>Autogas</h2>
                </div>
                <div className="main__cards__card__content__title">
                    <h1>$0.98</h1>
                    <div className="main__cards__card__content__title__price">
                        <h3>AVG PRICE</h3>
                        <p className="main__cards__card__content__title__price--red"><FontAwesomeIcon icon={faArrowUpLong} 
                        className="main__cards__card__content__title__price__icon" /> +2%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main__cards__card">
            <div className="main__cards__card__content">
                <div className="main__cards__card__content__title">
                    <h2>Fuel Oil</h2>
                </div>
                <div className="main__cards__card__content__title">
                    <h1>$.74</h1>
                    <div className="main__cards__card__content__title__price">
                        <h3>AVG PRICE</h3>
                        <p className="main__cards__card__content__title__price--red"><FontAwesomeIcon icon={faArrowUpLong} 
                        className="main__cards__card__content__title__price__icon"/> +2%</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
    
    

  );
};

export default Cards;