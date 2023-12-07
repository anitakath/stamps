
import Link from "next/link";

import { useState, useEffect } from "react";

//COMPONENTS
import Layout from "@/components/Layout";
import Slider from "@/components/slider/slider";

//STYLES
import styles from '../../styles/Pages/Register.module.css'

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../store/userSlice";
import { updateInput, validateInput, registerInput } from "@/store/inputSlice";
//import { addRegisteredUser } from "@/store/registeredUsersSlice";

const Register = () =>{

   const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
   const [isNotificationsChecked, setIsNotificationsChecked] = useState(false);
   const [isGPSChecked, setIsGPSChecked] = useState(false);
    const dispatch = useDispatch();


    const inputs = useSelector(state => state.input) // gibt ein Objekt aus
    //console.log(inputs.input)

    const isValid = useSelector((state) => state.input)
    //console.log(isValid.input.isValid)
    const isRegistered = useSelector((state) => state.input)
   

    let btnText = isRegistered.input.isRegistered ? '✨ REGISTRIERUNG ERFOLGREICH ✨ ' : 'REGISTRIEREN'
    
    const inputErrors = useSelector(state => state.input.errors)
   
   
    /*
    const isTouched = useSelector((state) => state.input)
    console.log(isTouched.input.isTouched)
    console.log('???????????????????????')
    */
  


    const [errorMessage, setErrorMessage] = useState(false)

    //console.log(inputErrors)
    
    useEffect(()=>{

      if(inputErrors){
        setErrorMessage(true)
      } else{
        setErrorMessage(false)
      }

    }, [inputErrors])

    useEffect(()=>{
        //console.log('checking errors')
         dispatch(validateInput(inputs.input));
         //console.log(inputs.input)
         //console.log(isValid.input.isValid)

    }, [inputs.input])

    const handleInputTouch = (e) => {
     // dispatch(setInputTouched(inputName));
       
       const value = e.target.value;
       const name = e.target.name;
       const type = "onBlur";
       dispatch(updateInput({ name, value, type }));
 
   

    };

    const handleInputChange =(e) =>{
        const value = e.target.value
        const name = e.target.name;
        const type= 'onChange';
        dispatch(updateInput({name, value, type}))
    }


  const handlePrivacyToggle = (e) => {
    e.preventDefault();
    setIsPrivacyChecked((prevState) => !prevState);
    dispatch(updateInput({ name: "privacy", value: !isPrivacyChecked }));
  };



    const handleNotificationsToggle = (e) => {
      e.preventDefault();
      setIsNotificationsChecked(!isNotificationsChecked);
      dispatch(updateInput({ name: "notifications", value: !isNotificationsChecked }));
    };

    const handleGPSToggle = (e) => {
      e.preventDefault();
      setIsGPSChecked(!isGPSChecked);
      dispatch(updateInput({ name: "gps", value: !isGPSChecked }));
    };




    const registerUserHandler = (e) =>{
      e.preventDefault();
  

      if (isValid.input.isValid) {
       
        console.log(
          "danke! Alle notwendigen Felder wurden erfolgreich ausgefüllt!"
        );
        //dispatch(registerUser());

        dispatch(registerInput(inputs));
      } else {
        console.log("fülle alle felder aus!");
      }

    

      /*
        try{
             const response = await fetch('/api/auth',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        const data = await response.json();
        console.log(data)

        } catch(error){
            console.log(error)
        }*/
    }

    return (
      <Layout>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={registerUserHandler}>
            <h3> mit Sternchen (*) markierte Felder sind Pflichtfelder </h3>
            <label> Vorname </label>
            <input
              name="vorname"
              type="text"
              placeholder="Vorname*"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.vorname}
                </span>
              )}
            </div>
            <label> Nachname </label>
            <input
              name="nachname"
              type="text"
              placeholder="Nachname"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.nachname}
                </span>
              )}
            </div>
            <label> E-Mail</label>
            <input
              name="email"
              type="email"
              placeholder="E-Mail*"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>{inputErrors.email}</span>
              )}
            </div>
            <label> Straße + Hausnummer </label>
            <input
              name="adresse"
              type="text"
              placeholder="Straße & Hausnummer"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.adresse}
                </span>
              )}
            </div>
            <label>Postleitzahl</label>
            <input
              name="postleitzahl"
              type="text"
              placeholder="Postleitzahl"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.postleitzahl}
                </span>
              )}
            </div>
            <label>Passwort</label>
            <input
              name="passwort"
              type="text"
              placeholder="Passwort*"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
              required
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.passwort}
                </span>
              )}
            </div>
            <label>Passwort</label>
            <input
              name="repeatedPasswort"
              type="text"
              placeholder="Passwort wiederholen*"
              onChange={handleInputChange}
              onBlur={handleInputTouch}
              required
            ></input>
            <div className={styles.errorContainer}>
              {errorMessage && (
                <span className={styles.errorMessage}>
                  {inputErrors.repeatedPasswort}
                </span>
              )}
            </div>
            <div className={styles.slidesContainer}>
              <p> Datenschutz zustimmen </p>
              <Slider
                isChecked={isPrivacyChecked}
                onToggle={handlePrivacyToggle}
                onBlur={handleInputTouch}
                label="privacy"
              />
              {errorMessage && (
                <p className={styles.privacyErrorMessage}>
                  {inputErrors.privacy} 
                  <Link href="/datensicherheit" className={styles.link}> zum Datenschutz</Link>
                </p>
              )}
            </div>
            <div className={styles.slidesContainer}>
              <p> Push-Benachrichtigungen erlauben </p>
              <Slider
                isChecked={isNotificationsChecked}
                onToggle={handleNotificationsToggle}
                label="notifications"
              />
            </div>
            <div className={styles.slidesContainer}>
              <p> GPS erlauben </p>
              <Slider
                isChecked={isGPSChecked}
                onToggle={handleGPSToggle}
                label="gps"
              />
            </div>

            <button type="submit" className={styles.registerBtn}>
              {btnText}
            </button>
          </form>
        </div>
      </Layout>
    );
}
export default Register;