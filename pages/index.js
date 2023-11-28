

import Image from 'next/image'



//REDUX
import { useSelector, useDispatch } from "react-redux";
import { login } from '@/store/authSlice';


//COMPONENTS
import Layout from '@/components/Layout'
import Login from '@/components/Startseite/Login';
import Preview from '@/components/Startseite/Preview';
import Welcome from './Welcome';


export default function Home() {


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  const dispatch = useDispatch();


  const loginHandler = () =>{
    dispatch(login())
  }



  return (
    <Layout>
      {isLoggedIn && <Welcome />}


      {!isLoggedIn && (
        <div>
          <button className="btn" onClick={loginHandler}> speed login </button>
          <Login />
          <Preview />
        </div>
      )}
    </Layout>
  );
}
