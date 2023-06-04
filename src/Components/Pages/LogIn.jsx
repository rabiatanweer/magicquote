import React, { useState } from 'react'
import  '../../styles/Signup.css'

export default function LogIn() {
  const[email, setEmail]= useState("");
  const[password, setPassword]= useState("");
  const [validLogin, setvalidLogin]= useState("Please fill in this form to LogIn an account.")
  
  const handleEmailChange= (e)=>{
      setEmail(e.target.value);
  };

  const handlePasswordChange= (e)=>{
      setPassword(e.target.value);
  };

   let loginData= JSON.parse(localStorage.getItem(`user-${email}`))
  //  let inputPassword= localStorage.getItem(`password-${email}`)

    function handleSubmit(e){
      e.preventDefault();
      if(email===loginData.email && password===loginData.password){

     localStorage.setItem("login", true)
      window.location.href = "/userquote";
      localStorage.setItem("useremail", email)
      }
      else{
        setvalidLogin("Invalid email or password, please try again")
        localStorage.setItem("login", false)
      }

    }

  return (
    <div className="main"> 
      <form >
  <div className="container">
    <h1>Log In</h1>
    <p>{validLogin}</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email"value={email} onChange={handleEmailChange} required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handlePasswordChange} required />
   
   <div className= "clearfix">
      <button type="submit" className="signupbtn" onClick={handleSubmit}>Log In</button>
    </div>
  </div>
</form>
    </div>
  )
}
