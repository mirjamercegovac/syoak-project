import React from "react";
import './loginSignupForm.scss';
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const LoginForm = () => {
    return(
        <div className="container-form">
            <form action="">
                <h1>Log in</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" required/>
                    <IoMail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <button type="submit" className="button-base">Log in</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
                <div className="homepage-link">
                    <a href="/"><FaArrowLeft /> Back to homepage</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;