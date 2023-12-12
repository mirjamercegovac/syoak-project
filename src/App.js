import React from "react";
import './styles/index.scss';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Horizontal from './components/main/Horizontal';
import About from './components/main/About';
import HorizontalScroll from './components/main/HorizontalScroll';
import Achievements from './components/main/Achievements';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Horizontal />
      <About />
      <HorizontalScroll />
      <Achievements />
      <Contact />
      <Footer />
     
    </>
  );
}

export default App;


