import React from "react";
import './create.scss';


const Create = ({closeCreate}) => {

  return (
   <div className="create">
    
    <div className="create__container">
        
        <form className="create__container__form">
            <h1 className="create__container__form__title">Add Fuel</h1>

            <div className="create__container__form__box">
                <input type="text" placeholder="Provider Name" name="providerName" className="create__container__form__box__input" required/>
            </div>
            <div className="create__container__form__box">
                <select name="type" className="create__container__form__box__input">
                    <option disabled>Fuel Type</option>
                    <option value="">Fuel Type</option>
                    <option value="">Autogas</option>
                    <option value=""></option>
                </select>
            </div>
            <div className="create__container__form__box">
                <input type="text" placeholder="Fuel Name" name="fuelName" className="create__container__form__box__input" required/>
            </div>
            <div className="create__container__form__box">
                <label htmlFor="price" className="create__container__form__box__label">Price: </label>
                <input type="number"  placeholder="1" name="price" className="create__container__form__box__number" required/> . <input type="number"  placeholder="00" name="" className="create__container__form__box__number" required/>
            </div>

            <div className="create__container__form__buttons">
                <button type="submit" className="create__container__form__buttons__save">Save Changes</button>
                <button type="submit" className="create__container__form__buttons__preview">Preview</button>
                <button type="submit" className="create__container__form__buttons__cancel" onClick={closeCreate}>Cancel</button>
            </div>
        </form>
    </div>
   </div>
  );
};

export default Create;