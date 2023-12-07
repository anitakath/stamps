

//COMPONENTS
import Layout from "@/components/Layout";

import Link from "next/link";

//STYLES
import styles from '../../styles/Pages/UserProfile.module.css'


//REDUX
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () =>{

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

    return (
      <Layout>
        <div className={styles.container}>
         
          {!isLoggedIn && (
            <div>
            <h1> du bist nicht eingeloggt</h1>
            
            <p> klicke <Link href="/" className={styles.link}> hier</Link>, um dich einzuloggen oder zu registrieren</p>
          </div>
          
          )}
          {isLoggedIn && (
            <div>
              <h1> du bist eingeloggt! </h1>
              <div className={styles.userField}>
                <p> Name </p>
                <p> Vorname </p>
                <p> ... </p>
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
}

export default UserProfile;