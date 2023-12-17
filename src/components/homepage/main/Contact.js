import React from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Height } from '@mui/icons-material';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
            <h2 className="contact__title">Get in Touch <br /> With Us</h2>

            <div className="contact__container">
                
                <div className="contact__container__form-container">

                    <form action="" className="contact__container__form-container__form" id="contact-form">
                        <div className="contact__container__form-container__form__box">
                            <label htmlFor="name" className="contact__container__form-container__form__box__label">Name</label>
                            <input type="text" name="name" className="contact__container__form-container__form__box__input" id="name" required />
                        </div>
                        <div className="contact__container__form-container__form__box">
                            <label htmlFor="email" className="contact__container__form-container__form__box__label">Email adress</label>
                            <input type="email" name="email"  className="contact__container__form-container__form__box__input" id="email" required />
                        </div>
                        <div className="contact__container__form-container__form__box contact__container__form-container__form__box--textarea">
                            <label htmlFor="message" className="contact__container__form-container__form__box__label">Message</label>
                            <textarea type="message" name="message"  className="contact__container__form-container__form__box__input" id="message" cols={30} rows={10} required></textarea>
                        </div>
                        <div className="contact__container__form-container__form__box contact__container__form-container__form__box--verification">
                            <label htmlFor="verification" className="contact__container__form-container__form__box__label">Verification</label>
                            <input type="checkbox" id="robotCheckbox" /> 
                            <span className="contact__container__form-container__form__box--verification__checkmark">
                                <FontAwesomeIcon icon={faCheck} className='contact__container__form-container__form__box--verification__checkmark__icon
                                contact__container__form-container__form__box--verification__icon' />
                            </span>
                            <label htmlFor="robotCheckbox" className="contact__container__form-container__form__box--verification__verifi">I am not a robot</label>
                        </div>
                        
                        <input type="submit" name="submit" className="button-base" value="Send Message"></input>
                       
                    </form>
                    
                </div>

                <div className="contact__map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109635.40762535605!2d-122.54903946552555!3d37.74942127387547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20Kalifornija%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1shr!2shr!4v1702146660900!5m2!1shr!2shr" 
                 style={{border: 0, borderRadius:'12px'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>


            </div>
        </section>
  );
};

export default Contact;
