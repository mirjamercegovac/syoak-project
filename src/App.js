import React from "react";
import './styles/index.scss';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Vertical from './components/main/Vertical';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Vertical />
      <Footer />
     
    </>
  );
}

export default App;


