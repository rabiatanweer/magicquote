import React, { useState } from 'react'
import style from  '../styles/Signup.module.css'
import { useNavigate } from 'react-router-dom';



export default function LogIn() {
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  // const navigate = useNavigate();
 
  
  const handleEmailChange= (e)=>{
      setEmail(e.target.value);
  };
  const handlePasswordChange= (e)=>{
      setPassword(e.target.value);
  };
   let inputEmail= localStorage.getItem("email")
   let inputPassword= localStorage.getItem("password")
    function handleSubmit(e){
      e.preventDefault();
      if(email===inputEmail && password==inputPassword){

     localStorage.setItem("login", true)
      // navigate("/userquote")
      window.location.href = "/userquote";
        console.log(email, password, "hello")
      }
      else{
        console.log("not matched")
        localStorage.setItem("login", false)
      }

    }

  return (
    <div className={style.main}> 
      <form >
  <div className={style.container}>
    <h1>Log In</h1>
    <p>Please fill in this form to LogIn an account.</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email"value={email} onChange={handleEmailChange} required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handlePasswordChange} required />
   
    
    <div className= {style.clearfix}>
      
      <button type="submit" className={style.signupbtn} onClick={handleSubmit}>Log In</button>
    </div>
  </div>
</form>
    </div>
  )
}
