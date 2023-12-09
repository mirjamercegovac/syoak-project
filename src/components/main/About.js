import React from "react";
import './about.scss';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.svg';
import image3 from '../../images/image3.svg';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="about-container">

                <h2 className="title">
                    SYOAK Solution
                </h2>
                <h3 className="text">
                    SYOAK industry consists of companies that own and operate extensive networks of pipeline assets to connect producers of oil, natural gas and natural gas liquids from the prolific North American resources to key markets. We also distribute natural gas to a growing base of industrial and residential customers through transmission pipelines.
                </h3> 
            </div>

            <div className="box-container">
                <div className="box">
                    <div className="content">
                        <h3 className="title">
                        Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk
                        </h3>
                        <p className="paragraph">
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <h3 className="title">
                        Our bussines takes the industry of oil and gass to a new level.
                        </h3>
                        <p className="paragraph-mid">
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="content">
                        <h3 className="title">
                        Syoak serves more than 2,500 petrol stations globally
                        </h3>
                        <p className="paragraph">
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                </div>
                
            </div>
        </section>   
    );
}

export default About;