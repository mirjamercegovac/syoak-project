import React from "react";
import './styles/index.scss';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Horizontal from './components/main/Horizontal';
import About from './components/main/About';
import Achievements from './components/main/Achievements';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Horizontal />
      <About />
      <Achievements />
      <Footer />
     
    </>
  );
}

export default App;


