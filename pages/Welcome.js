


//STYLES 
import styles from '../styles/Welcome.module.css'

//REDUX
import {useSelector, useDispatch} from 'react-redux'

const Welcome = () =>{


    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    console.log(isLoggedIn)

    let user = isLoggedIn ? 'logged in user ' : 'not logged in user'
    
    return (
      <div className={styles.container}>
        <h1> HEY {user} </h1>
        <div className={styles.user_profile}>
          <div className={styles.lastUsedCard}> 
            *last used card* 
          </div>
        </div>
      </div>
    );
} 

export default Welcome