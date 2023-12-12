import {React, useRef} from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import './horizontalScroll.scss';
import extraction from '../../images/extraction.svg';
import transport from '../../images/transport.svg';
import refining from '../../images/refining.svg';
import exportI from '../../images/export.svg';
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



const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  
  
  return (
    <section  ref={targetRef} className="horizontal-scroll" id="horizontal-scroll"> 

        <div className="horizontal-scroll-container">

          <motion.div style={{ x }} className="progress">
            {pages.map((page) => {
              return <Circle page={page} key={page.id} />;
            })}
          </motion.div>

          <motion.div style={{ x }} className="motion-container">
            {pages.map((page) => {
              return <Page page={page} key={page.id} />;
            })}
          </motion.div>
    
        </div>
    </section>
    
  );
};

const Circle = ({page}) => {
  return (
    <div className="progress-bar">
      <div key={page.id} className='circle'>
        <KeyboardArrowLeftRoundedIcon className='left-icon' />
        <div className="outer-circle-orange">
            <div className="inner-circle-orange">
                <p>{page.text}</p>
            </div>
        </div>
        <KeyboardArrowRightRoundedIcon className='right-icon' />
      </div>
      <div className="line" /> 
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
      <div key={page.id} className="page">
        <h2 className='main-title'> {mainTitleWithBreak} </h2>
        <div className='info'>
          <div className="content">
            <h3 className="title">
              {page.title}
            </h3>
            <p className="paragraph">
              {page.description}
            </p>
          </div>
          <div className="image">
            <img src={page.image} alt="" />
          </div>
        </div>
      </div>
  );
};


export default HorizontalScroll;
