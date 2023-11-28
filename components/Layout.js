

//COMPONENTS
import Header from './header/Header';
import Footer from './footer/Footer'

//STYLES
import styles from '../styles/Layout/Header.module.css'

const Layout = ({children}) =>{

    return (
      <div className={styles.app_container}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    );
}

export default Layout