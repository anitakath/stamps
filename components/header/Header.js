

import Link from 'next/link';

//STYLES
import styles from '../../styles/Layout/Header.module.css'


//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = () =>{

    return (
      <div className={styles.header_container}>
        <Link href="/impressum" className={styles.link}>
          <FontAwesomeIcon icon={faBars} />
        </Link>

        <Link href="/search" className={styles.link}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
      </div>
    );
}

export default Header;