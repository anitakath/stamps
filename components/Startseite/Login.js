
import Link from 'next/link'
import { useState } from 'react'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import { login } from '@/store/authSlice'


//STYLES
import styles from '../../styles/Login.module.css'

const Login = () =>{

    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const emailChangeHandler = (e) =>{
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e)=>{
        setPassword(e.target.value)
    }

     console.log(email)

    const loginHandler = async(e) => {

        e.preventDefault();
        
        if(email && password){
            try {
              const response = await fetch("/api/auth", {
                method: "POST",
                headery: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
              });
              console.log(response)

              const data = await response.json();
              console.log(data)

              if (response.ok) {
                  dispatch(login())
                  
              }else{
                  console.log('Fehler beim Einloggen')
              }
            } catch (error) {
                console.log(error)
                console.log('Fehler beim Einloggen')
            }


        }else{
            console.log('enter email and password!')
        }


    }

    return (
      <div className={styles.container}>

        <form className={styles.loginForm} onSubmit={loginHandler}>
          <label> email </label>
          <input
            type="email"
            placeholder="E-MAIL"
            onChange={emailChangeHandler}
          ></input>
          <label> password </label>
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={passwordChangeHandler}
          />

          <button className={styles.loginBtn} type="submit">
            LOGIN
          </button>
          <p>
            <em> noch nicht registriert? <Link href="/register" className={styles.link}> klicke hier </Link></em>
          </p>
        </form>
      </div>
    );
} 
export default Login