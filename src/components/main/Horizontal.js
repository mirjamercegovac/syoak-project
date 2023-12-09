import React from "react";
import './home.scss';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';
import arrow from '../../images/Arrow.svg';

const Horizontal = () => {
    return (
        <section className="horizontal-line section">
            <img src={arrow} className="vertical-arrow" alt=""></img>
            <div className="progress-bar">
                <div className="outer-circle-orange">
                    <div className="inner-circle-orange">
                        <p>Extraction</p>
                    </div>
                </div>
                <div className="line" />
                <div className="outer-circle">
                    <div className="inner-circle" />
                </div>
                <div className="line" />
                <div className="outer-circle">
                    <div className="inner-circle" />
                </div>
                <div className="line" />
                <div className="outer-circle">
                    <div className="inner-circle" />
                </div>
            </div>

        </section>
        

    );

};

export default Horizontal;