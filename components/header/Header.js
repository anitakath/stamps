
import { useState } from 'react';
import Link from 'next/link';

//STYLES
import styles from '../../styles/Layout/Header.module.css'


//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = () =>{

  const [ showSettings, setShowSettings] = useState(false)

  const settingsHandler = () =>{
    if(showSettings === false){
      setShowSettings(true)
    } else if( showSettings === true){
      setShowSettings(false)
    }
  }

 

  /*
   <Link href="/settings" className={styles.link} >
          <FontAwesomeIcon icon={faBars} />
        </Link>
        */

    return (
      <div className={styles.header_container}>
        <button className={styles.link} onClick={settingsHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <Link href="/search" className={styles.link}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>



        <div className={ showSettings ? styles.openedSettings : styles.closedSettings}> 
          <button onClick={settingsHandler} className={styles.settingsBtn}> x </button>

          <p> IMPRESSUM </p>
          <p> SEITE NEU LADEN </p>
          <p> GUTSCHEINCODES </p>
          <p> BENACHRICHTIGUNG </p>
        </div>



      </div>
    );
}

export default Header;