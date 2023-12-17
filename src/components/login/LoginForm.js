import React from "react";
import './loginSignupForm.scss';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const LoginForm = () => {
    return(
        <div className="container-form">
            <form className="container-form__form" action="">
                <h1 className="container-form__form__title">Log in</h1>
                <div className="container-form__form__box">
                    <input type="email" placeholder="Email" className="container-form__form__box__input" required/>
                    <IoMail className="container-form__form__box__icon"  />
                </div>
                <div className="container-form__form__box">
                    <input type="password" placeholder="Password" className="container-form__form__box__input" required />
                    <FaLock className="container-form__form__box__icon"  />
                </div>
                <button type="submit" className="button-base">Log in</button>
                <div className="container-form__form__register-link">
                    <p>Don't have an account? <a href="/signup" className="container-form__form__register-link--text">Sign up</a></p>
                </div>
                <div className="container-form__form__homepage-link">
                    <a href="/" className="container-form__form__homepage-link--text"><FaArrowLeft /> Back to homepage</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;