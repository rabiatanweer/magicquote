import React, { useState } from 'react'
import style from  '../styles/Signup.module.css'


export default function SignUp() {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const handleEmailChange= (e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange= (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit= (e)=>{
        e.preventDefault();
        localStorage.setItem(email, setEmail)
        localStorage.setItem(password, setPassword)
    };
  return (
    <div className={style.main}>
     <form onSubmit={handleSubmit} >
  <div className={style.container}>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
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
