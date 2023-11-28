

import Image from 'next/image'



//REDUX
import { useSelector } from "react-redux";


//COMPONENTS
import Layout from '@/components/Layout'
import Login from '@/components/Startseite/Login';
import Preview from '@/components/Startseite/Preview';
import Welcome from './Welcome';


export default function Home() {


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  console.log(isLoggedIn)
  return (
    <Layout>
      {!isLoggedIn && <Welcome />}


      {isLoggedIn && (
        <div>
          <Login />
          <Preview />
        </div>
      )}
    </Layout>
  );
}
