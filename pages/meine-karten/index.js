
import { useEffect, useState } from "react";


import Image from "next/image";
import Link from "next/link";

//COMPONENTS
import Layout from "@/components/Layout";
import Modal from "@/components/modal/Modal";



//STYLES
import styles from '../../styles/Pages/MyCards.module.css'
import modal from '../../styles/components/Modal.module.css'



//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addCard, setCardData, fetchCards,selectCards } from "@/store/cardsSlice";



const MyCards = () =>{
  const dispatch = useDispatch();

  const cardItems = useSelector((state) => state.cards.cardData);
  const cards = useSelector(selectCards);

  console.log(cardItems);
  console.log(cards)

  // ----------------------------- SELECT YEAR ------------------------

  const currYear = new Date().getFullYear();

  const [date, setDate] = useState(currYear);

  const handleYear = (e) => {
    if (e === "further") {
      if (date === currYear + 1) {
        return;
      } else {
        setDate((prevDate) => (prevDate += 1));
      }
    } else if (e === "back") {
      if (date <= 2015) {
        return;
      } else {
        setDate((prevDate) => (prevDate -= 1));
      }
    }
  };

  // ----------------------------- FETCH CARDS DATA ------------------------

  //const [cardData, setCardsData] = useState();
  const [loadedCardData, setLoadedCardData] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImages, setHoveredImages] = useState([]);


  useEffect(() => {
    dispatch(fetchCards());
  }, []);




  console.log(loadedCardData);

  const addCardHandler = () => {
    console.log("adding another card");
    //dispatch(addCard(card));
  };

  const imageInfoHandler = () => {
    console.log("hi");
  };

  // ----------------------------- STYLING CARDS ------------------------

  const handleMouseEnterImage = (idx) => {
    setHoveredImages((prevHoveredImages) => {
      const newHoveredImages = [...prevHoveredImages];
      newHoveredImages[idx] = true;
      return newHoveredImages;
    });
    setIsHovered(true);
  };

  const handleMouseLeaveImage = (idx) => {
    setHoveredImages((prevHoveredImages) => {
      const newHoveredImages = [...prevHoveredImages];
      newHoveredImages[idx] = false;
      return newHoveredImages;
    });
    setIsHovered(false);
  };

  /* --------------------------------- MODAL ---------------------------------  */
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [searchString, setSearchString] = useState("");

  const searchInputHandler = (e) => {
    setSearchString(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    console.log(searchString);
  };

  return (
    <Layout>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className={modal.container} onClick={closeModal}>
          <div className={modal.modalContainer}>
            <div className={modal.cardSearchContainer}>
              <button onClick={closeModal} className={modal.closeBtn}>
                X
              </button>

              <div className={modal.searchField}>
                <input
                  type="search"
                  placeholder="Suche"
                  onChange={searchInputHandler}
                ></input>
                <button
                  onClick={searchSubmitHandler}
                  className={modal.searchHandler}
                >
                  🔎
                </button>
              </div>
            </div>

            <div className={modal.searchOutputField}>
              <ul className={modal.searchOutput}>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>
                <li> search output item </li>

                <li> search output item </li>
                <li> search output item </li>
              </ul>
            </div>

            <div className={modal.searchMap}></div>
          </div>
        </div>
      </Modal>

      <div className={styles.container}>
        <h1> MEINE KARTEN </h1>
        <div className={styles.cartsField}>
          <button className={styles.filter}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <div className={styles.cart_years}>
            <button onClick={() => handleYear("back")}>
              <FontAwesomeIcon icon={faAnglesLeft} className={styles.icon} />
            </button>
            <h2> {date} </h2>
            <button onClick={() => handleYear("further")}>
              <FontAwesomeIcon icon={faAnglesRight} className={styles.icon} />
            </button>
          </div>
          <button className={styles.addBtn} onClick={openModal}>
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <div className={styles.carts}>
            {cards.map((card, idx) => (
              <Link
                key={card.id}
                href={`/meine-karten/${card.id}`}
                className={styles.imageLink}
              >
                <div className={styles.cart} key={card.id}>
                  <Image
                    src={card.img}
                    width={100}
                    height={100}
                    priority={true}
                    className={
                      hoveredImages[idx]
                        ? styles.cardImageHovered
                        : styles.cardImage
                    }
                    onClick={imageInfoHandler}
                    onMouseEnter={() => handleMouseEnterImage(idx)}
                    onMouseLeave={() => handleMouseLeaveImage(idx)}
                  />

                  <p
                    className={
                      hoveredImages[idx] ? styles.cardTitle : styles.noCardTitle
                    }
                    onMouseEnter={() => handleMouseEnterImage(idx)}
                    onMouseLeave={() => handleMouseLeaveImage(idx)}
                  >
                    {card.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 

export default MyCards;