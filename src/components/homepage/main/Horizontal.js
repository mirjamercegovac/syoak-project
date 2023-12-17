import React from "react";
import './home.scss';
import arrow from '../../../images/Arrow.svg';

const Horizontal = () => {
    return (
        <section className="horizontal-line section">
            <img src={arrow} className="horizontal-line__vertical-arrow" alt="" />
            <div className="horizontal-line__progress-bar">
                <div className="horizontal-line__progress-bar__outer-circle-orange">
                    <div className="horizontal-line__progress-bar__outer-circle-orange__inner-circle-orange">
                        <p className="horizontal-line__progress-bar__outer-circle-orange__text">Extraction</p>
                    </div>
                </div>
                <div className="horizontal-line__progress-bar__line" />
                <div className="horizontal-line__progress-bar__outer-circle">
                    <div className="horizontal-line__progress-bar__outer-circle__inner-circle" />
                </div>
                <div className="horizontal-line__progress-bar__line" />
                <div className="horizontal-line__progress-bar__outer-circle">
                    <div className="horizontal-line__progress-bar__outer-circle__inner-circle" />
                </div>
                <div className="horizontal-line__progress-bar__line" />
                <div className="horizontal-line__progress-bar__outer-circle">
                    <div className="horizontal-line__progress-bar__outer-circle__inner-circle" />
                </div>
            </div>
        </section>
    );
};

export default Horizontal;
