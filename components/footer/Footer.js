

import { useState } from 'react';

import Link from 'next/link';

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


//STYLES
import styles from '../../styles/Layout/Footer.module.css'
import modal from "../../styles/components/Modal.module.css";

//COMPONENTS
import Modal from '../modal/Modal';

const Footer = () =>{



    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
      <div className={styles.footer_container}>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className={modal.container} onClick={closeModal}>
            <div className={modal.closeBtnContainer}>
              <button onClick={closeModal} className={modal.closeBtn}> close </button>
            </div>
            
            <div className={modal.activeCardToBeStamped}>
              card, ready to be stamped
            </div>
          </div>
        </Modal>

        <div>
          <Link href="/meine-karten">
            <FontAwesomeIcon icon={faAddressCard} />
          </Link>
        </div>

        <div>
          <button onClick={openModal}>
            <FontAwesomeIcon icon={faStamp} />
          </button>
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