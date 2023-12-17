import React, { useRef, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import './slider.scss';
import extraction from '../../../images/extraction.svg';
import transport from '../../../images/transport.svg';
import refining from '../../../images/refining.svg';
import exportI from '../../../images/export.svg';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const pages = [
  {
    id: 1,
    mainTitle: "How We Do It",
    title: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
    description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: extraction,
    text: "Extraction",
  },
  {
    id: 2,
    mainTitle: "Mode of Transport",
    title: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
    description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: transport,
    text: "Transport",
  },
  {
    id: 3,
    mainTitle: "We Make it More Efficient",
    title: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
    description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: refining,
    text: "Refining",
  },
  {
    id: 4,
    mainTitle: "Where Does it Go",
    title: "Syoak is uniquely positioned to deliver actionable intelligence to analyze and reduce risk",
    description: "We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: exportI,
    text: "Export",
  },
 
];

const Slider = () => {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  
  useEffect(() => {
    setWidth((slider.current.scrollWidth - slider.current.offsetWidth));
  }, []);
  
  return (
    <section ref={slider} while={{cursor: "grabbing"}} className="horizontal-scroll" id="horizontal-scroll"> 

        <motion.div drag="x"
          dragConstraints={{right: 0, left: -width}} className="horizontal-scroll__container" >

          <motion.div className="horizontal-scroll__container__progress">
            {pages.map((page) => {
              return <Circle page={page} key={page.id} />;
            })}
          </motion.div>

          <motion.div className="horizontal-scroll__container__motion-container">
            {pages.map((page) => {
              return <Page page={page} key={page.id} />;
            })}
          </motion.div>
    
        </motion.div>
    </section>
    
  );
};

const Circle = ({page}) => {
  return (
    <div className="horizontal-scroll__container__progress__progress-bar">

      <div key={page.id} className='circle'>

        <KeyboardArrowLeftRoundedIcon className='horizontal-scroll__container__progress__progress-bar__left-icon' />
        <div className="horizontal-scroll__container__progress__progress-bar__outer-circle-orange">
            <div className="horizontal-scroll__container__progress__progress-bar__outer-circle-orange__inner-circle-orange">
                <p>{page.text}</p>
            </div>
        </div>
        <KeyboardArrowRightRoundedIcon className='horizontal-scroll__container__progress__progress-bar__right-icon' />
      
      </div>

      <div className="horizontal-scroll__container__progress__progress-bar__line" /> 
    </div>
  )
}


const Page = ({page}) => {
  const wordsWithBreak = ["We", "Transport", "More", "Does"];

  const mainTitleWithBreak = page.mainTitle
            .split(' ')
            .map((word, index, array) => (
                wordsWithBreak.includes(word) && index > 0
                    ? [<br key={`br-${index}`} />, word, ' '] 
                    : [word, ' '] 
            ));
  return (
      <div key={page.id} className="horizontal-scroll__container__motion-container__page">
        <h2 className='horizontal-scroll__container__motion-container__page--main-title'> {mainTitleWithBreak} </h2>
        <div className='horizontal-scroll__container__motion-container__page__info'>
          <div className="horizontal-scroll__container__motion-container__page__info__content">
            <h3 className="horizontal-scroll__container__motion-container__page__info__content--title">
              {page.title}
            </h3>
            <p className="horizontal-scroll__container__motion-container__page__info__content--paragraph">
              {page.description}
            </p>
          </div>
          <div className="horizontal-scroll__container__motion-container__page__info__image">
            <img src={page.image} alt="" />
          </div>
        </div>
      </div>
  );
};


export default Slider;
