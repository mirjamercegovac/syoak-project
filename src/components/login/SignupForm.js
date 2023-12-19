import React, {useState} from "react";
import './loginSignupForm.scss';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const SignupForm = () => {

    return(
        <div className="container-form">
            <form className="container-form__form" action="">
                
                <h1 className="container-form__form__title">Sign up</h1>
                
                <span className="container-form__form__show-message">Message</span>
                
                <div className="container-form__form__box">
                    <input type="text" placeholder="First name" className="container-form__form__box__input" required/>
                    <FaUser className="container-form__form__box__icon"  />
                </div>
                <div className="container-form__form__box">
                    <input type="text" placeholder="Last name" className="container-form__form__box__input" required/>
                    <FaUser className="container-form__form__box__icon"  />
                </div>
                <div className="container-form__form__box">
                    <input type="email" placeholder="Email" className="container-form__form__box__input" required/>
                    <IoMail className="container-form__form__box__icon"  />
                </div>
                <div className="container-form__form__box">
                    <input type="password" placeholder="Password" className="container-form__form__box__input" required />
                    <FaLock className="container-form__form__box__icon"  />
                </div>
                <button type="submit" className="button-base">Sign up</button>
                <div className="container-form__form__register-link">
                    <p>Have an account? <a href="/login" className="container-form__form__register-link--text">Log in</a></p>
                </div>
                <div className="container-form__form__homepage-link">
                    <a href="/" className="container-form__form__homepage-link--text"><FaArrowLeft /> Back to homepage</a>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;