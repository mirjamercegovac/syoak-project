import React from "react";
import './create.scss';


const Create = ({closeCreateUser}) => {

  return (
   <div className="create">
    
    <div className="create__container">
        
        <form className="create__container__form">
            <h1 className="create__container__form__title">Add User</h1>

            <div className="create__container__form__box">
                <input type="text" placeholder="Full Name" name="providerName" className="create__container__form__box__input" required/>
            </div>
            <div className="create__container__form__box">
                <select name="type" className="create__container__form__box__input">
                    <option disabled>Gender</option>
                    <option value="">Gender</option>
                    <option value="">Female</option>
                    <option value="">Male</option>
                </select>
            </div>
            <div className="create__container__form__box">
                <input type="text" placeholder="Phone Number" name="fuelName" className="create__container__form__box__input" required/>
            </div>
            <div className="create__container__form__box">
                <label htmlFor="date" className="create__container__form__box__label">Date Birth: </label>
                <input type="date"  placeholder="" name="date" className="create__container__form__box__input" style={{width:'40%'}} required/>
            </div>

            <div className="create__container__form__buttons">
                <button type="submit" className="create__container__form__buttons__save">Save Changes</button>
                <button type="submit" className="create__container__form__buttons__preview">Preview</button>
                <button type="submit" className="create__container__form__buttons__cancel" onClick={closeCreateUser}>Cancel</button>
            </div>
        </form>
    </div>
   </div>
  );
};

export default Create;