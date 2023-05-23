import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  const [Login, setLogIn]= useState(false);
  const navigate = useNavigate();
useEffect(()=>{
  const storedLogin = JSON.parse(localStorage.getItem('login'));
  setLogIn(storedLogin);
},[])

 function logoutHandler(){
    localStorage.setItem("login", false)
    setLogIn(false)
    navigate("/")
    }
 
  return (
    <div className="navbar">
      {Login? (<> 
        <div> <Link className="text" to= '/'>Quotes</Link> </div>
        <div> <Link className="text" to= '/userquote'>UserQuotes</Link> </div>
        <div className="text" onClick={logoutHandler}> Logout </div>
      </>): (<> 
        <div> <Link className="text" to= '/'>Quotes</Link> </div>
        <div> <Link className="text"to= '/signUp'>SignUp</Link> </div>
       <div> <Link className="text" to= '/logIn'>LogIn</Link> </div>
      </>)}
    </div>
  )
};

