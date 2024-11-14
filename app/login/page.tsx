'use client'
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import MainImage from "@/public/images/main-image-for-login.png";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Image className={styles.mainImage} src={MainImage} alt="mainImage" />
        
        <div className={styles.loginContainer}>

          <div className={styles.loginContainerForFlex}>

            <h1>Log in to Exclusive</h1>
                                  
            <h2>Enter your details below</h2>
             
            <form onSubmit={handleSubmit} className={styles.loginContainerForm} >
              
              <input 
                type="text" 
                placeholder="Enter your email" 
                id="email" 
                value={email}
                onChange={handleEmailChange}
              />
              
              <input 
                type="password"
                placeholder="Password" 
                id="password" 
                value={password}
                onChange={handlePasswordChange}
              />
              <div className={styles.logButtonContainer}>
                <button className={styles.createAccountButton} type="submit">Log in</button>
                <Link href=" " className={styles.forgotPasswordButton}>Forget Password?</Link>
              </div>

            </form>
            
          </div>
        </div> 
      </div>
    </>
  );
};

export default Login;
