import React from "react";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Header from './components/homepage/header/Header';
import Home from './components/homepage/main/Home';
import Horizontal from './components/homepage/main/Horizontal';
import About from './components/homepage/main/About';
import HorizontalScroll from './components/homepage/main/HorizontalScroll';
import Achievements from './components/homepage/main/Achievements';
import Contact from './components/homepage/main/Contact';
import Footer from './components/homepage/footer/Footer';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/login/SignupForm';
import Slider from './components/homepage/main/Slider';
import Admin from './components/admin/ahomepage/Admin';


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/admin" element={<Admin />} />
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


