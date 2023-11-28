

//COMPONENTS
import Layout from "@/components/Layout";


//STYLES
import styles from '../../styles/Pages/UserProfile.module.css'

const UserProfile = () =>{

    return (
      <Layout>
        <div className={styles.container}>
          <h1> USER PROFILE </h1>

          <div className={styles.userField}>
            <p> Name </p>
            <p> Vorname </p>
            <p> ... </p>
          </div>
        </div>
      </Layout>
    );
}

export default UserProfile;