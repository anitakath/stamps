

import Link from 'next/link';

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


//STYLES
import styles from '../../styles/Layout/Footer.module.css'

const Footer = () =>{

    return (
      <div className={styles.footer_container}>

        <div>
          <Link href="/meine-karten">
            <FontAwesomeIcon icon={faAddressCard} />
          </Link>
        </div>

        <div>
          <Link href="/stamp">
            <FontAwesomeIcon icon={faStamp} />
          </Link>
        </div>

        <div>
          <Link href="/user-profil">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        
      </div>
    );
}

export default Footer;