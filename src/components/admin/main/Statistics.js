import React from "react";
import './main.scss';
import ChartS from './ChartS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import illustration from '../../../images/illustration.svg';

const Statistics = () => {

  return (

    <div className="main__statistic">
        <h1>Price Statistics</h1>
        <div className="main__statistic__data">
            <div className="main__statistic__data__chart">
                <ChartS />

                <div className="main__statistic__data__chart__div">
                    <div className="main__statistic__data__chart__div__box">
                        <div className="main__statistic__data__chart__div__box__icon">
                            <h3>C</h3>
                        </div>
                        <div className="main__statistic__data__chart__div__box__info">
                            <h3>CHEVRON</h3>
                            <p>$1.80</p>
                        </div>
                        <div className="main__statistic__data__chart__div__box__perc">
                            <h3 className="main__statistic__data__chart__div__box__perc--green">
                                <FontAwesomeIcon icon={faArrowDownLong} /> -6%</h3>
                        </div>
                    </div>
                    <div className="main__statistic__data__chart__div__box">
                        <div className="main__statistic__data__chart__div__box__icon">
                            <h3>C</h3>
                        </div>
                        <div className="main__statistic__data__chart__div__box__info">
                            <h3>CHEVRON</h3>
                            <p>$1.80</p>
                        </div>
                        <div className="main__statistic__data__chart__div__box__perc">
                            <h3 className="main__statistic__data__chart__div__box__perc--red"
                            ><FontAwesomeIcon icon={faArrowUpLong} /> +11%</h3>
                        </div>
                    </div>
                    <div className="main__statistic__data__chart__div__box">
                        <div className="main__statistic__data__chart__div__box__icon">
                            <h3>C</h3>
                        </div>
                        <div className="main__statistic__data__chart__div__box__info">
                            <h3>CHEVRON</h3>
                            <p>$1.80</p>
                        </div>
                        <div className="main__statistic__data__chart__div__box__perc">
                            <h3 className="main__statistic__data__chart__div__box__perc--red">
                                <FontAwesomeIcon icon={faArrowUpLong} /> +6%</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main__statistic__data__image">
                <img src={illustration} alt="" />
                <p className="main__statistic__data__image__text">Find the best gas prices in your state to 
                    maximize savings at the pump.</p>
                <a href="" className="main__statistic__data__image__btn">Find prices</a>
            </div>

            
        </div>

        
       
    </div>

  );
};

export default Statistics;