import React, { useState } from 'react'
import style from  '../styles/Signup.module.css'
import { useNavigate } from 'react-router-dom';



export default function SignUp() {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const[login, setLogin]= useState("Please fill in this form to create an account.")

    
    const handleEmailChange= (e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange= (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit= (e)=>{
        e.preventDefault();
        
        if (email.includes("@")) {
          if (password.length >= 8) {
            localStorage.setItem(`email-${email}`, email);
            localStorage.setItem(`password-${email}`, password);
            setLogin("Your account has been created");
            setEmail("");
            setPassword("");
          } else {
            setLogin("Password should be at least 8 characters long");
          }
        } else {
          setLogin("Enter a valid email");
        }
      };
  return (
    <div className={style.main}>
     <form onSubmit={handleSubmit} >
  <div className={style.container}>
    <h1>Sign Up</h1>
    <p> {login}</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={handleEmailChange} required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handlePasswordChange} required />
   
    
    <div className= {style.clearfix}>
      
      <button type="submit" className={style.signupbtn}>Sign Up</button>
      
    </div>
  </div>
</form>

    </div>
  )
}
