import React from "react";
import './home.scss';
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container">

                <h1 className="title">
                    Our bussines takes the industry of oil & gass to a new level.
                </h1>
                <h2 className="text">
                        We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond
                </h2>    
                
                <div className="button-base">
                    <a href="">
                        <CallMadeRoundedIcon style={{ width: '14px', position: 'relative', top: '8px' }}/> Learn more
                    </a>
                </div>
            </div>
        </section>

    );

};

export default Home;