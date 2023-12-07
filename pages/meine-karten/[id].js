

import {useEffect} from 'react'
import { useRouter} from "next/router";
import Image from "next/image";
import Link from 'next/link';


//STYLES
import styles from '../../styles/pages/MyCards.module.css'


//COMPONENTS
import Layout from "@/components/Layout";


//REDUX 
import { useSelector, useDispatch } from "react-redux";
import { setCardData } from "@/store/cardsSlice";
import { selectCards, fetchCards } from "@/store/cardsSlice";

//FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";





export default function ObjectDetails({object}){
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch()



  const cards = useSelector(selectCards);
  const card = cards.find((card) => card.id === id);

  const cardItems = useSelector((state) => state.cards.cardData);
  




  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  if (!card) {
    
    return <div>Loading...</div>;
  }






  return (
    <Layout>
      <Link href="/meine-karten" className={styles.goBackLink}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className={styles.individualCardContainer}>
        <div className={styles.individualCard}>
          <div className={styles.cardTitleField}>
            <h1> {card.name} </h1>
            <Image
              src={card.img}
              width={100}
              height={100}
              priority={true}
              alt="jooo"
              className={styles.image}
            ></Image>
          </div>

          <div className={styles.stampsField}>
            <div className={styles.stampsFirstRow}>
              <div className={styles.stamp}> 1 </div>
              <div className={styles.stamp}> 2 </div>
              <div className={styles.stamp}> 3 </div>
              <div className={styles.stamp}> 4 </div>
              <div className={styles.stamp}> 5 </div>
            </div>
            <div className={styles.stampsSecondRow}>
              <div className={styles.stamp}> 6 </div>
              <div className={styles.stamp}> 7 </div>
              <div className={styles.stamp}> 8 </div>
              <div className={styles.stamp}> 9 </div>
              <div className={styles.stamp}> 10 </div>
            </div>
          </div>
          <div className={styles.cardInfos}>
            <p> id = {id} </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/*
async function fetchObjects(){
   const response = await fetch("/api/cards");
   const data = await response.json();
    return data
}



useEffect(() => {
  const fetchCardData = async () => {
    const response = await fetch("/api/cards");
    const data = await response.json();

    console.log(data);
    
  };

  fetchCardData();
}, []);

*/

/*

export async function getStaticPaths() {
  // Lade die Daten für alle Objekte
  const objects = await fetchObjects(); // Funktion zum Laden der Objekte implementieren

  // Erstelle einen Pfad für jedes Objekt
  const paths = objects.map((object) => ({
    params: { id: object.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Lade die Daten für das spezifische Objekt basierend auf der ID
  const object = await fetchObjectById(params.id); // Funktion zum Laden des spezifischen Objekts implementieren

  return {
    props: {
      object,
    },
  };
}*/