import React from "react";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Header from './components/header/Header';
import Home from './components/main/Home';
import Horizontal from './components/main/Horizontal';
import About from './components/main/About';
import HorizontalScroll from './components/main/HorizontalScroll';
import Achievements from './components/main/Achievements';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/login/SignupForm';
import Slider from './components/main/Slider';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Home />
              <Horizontal />
              <About />
              <Slider />
              <Achievements />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;


