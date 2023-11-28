
import { useEffect, useState } from "react";
import Image from "next/image";

//COMPONENTS
import Layout from "@/components/Layout";


//STYLES
import styles from '../../styles/Pages/MyCards.module.css'

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "@/store/cardsSlice";



const MyCards = () =>{
  const dispatch = useDispatch();

  // ----------------------------- SELECT YEAR ------------------------

  const currYear = new Date().getFullYear();
  console.log(currYear);

  const [date, setDate] = useState(currYear);

  console.log(date);

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

  const [cardData, setCardData] = useState();
  const [loadedCardData, setLoadedCardData] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredImages, setHoveredImages] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      const response = await fetch("/api/cards");
      const data = await response.json();

      console.log(data);
      setCardData(data);
      setLoadedCardData(true);
    };

    fetchCardData();
  }, []);

  console.log(cardData);

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

  

  console.log(isHovered);
  return (
    <Layout>
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
          <button className={styles.addBtn} onClick={addCardHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <div className={styles.carts}>
            {loadedCardData &&
              cardData.map((card, idx) => (
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
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 

export default MyCards;