import React from "react";
import './achievements.scss';
import icon from '../../images/icon.svg';
import engineers from '../../images/engineers.svg';
import ruler from '../../images/ruler.svg';
import skyline from '../../images/skyline.svg';

const Achievements = () =>{
    return (
        <section className="achievements section">
            <div className="achievements-container">

                <h2 className="title">
                    Our Achievements
                </h2>
                <h3 className="text">
                    SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil, natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a growing base of industrial and residential customers through transmission pipelines.
                </h3> 
            </div>

            <div className="ach-container">
                <div className="box">
                    <div className="icon">
                        <img src={ruler} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="number">2562</h4>
                        <p className="text">Square Meters Built</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={skyline} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="number">184</h4>
                        <p className="text">Completed Projects.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={engineers} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="number">351</h4>
                        <p className="text">Work With Us</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <img src={icon} alt=""/>
                    </div>
                    <div className="content">
                        <h4 className="number">65</h4>
                        <p className="text">Ideas Realized</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;