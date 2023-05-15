import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={style.navbar}>
       
      <div> <Link className={style.text} to= '/'>Quotes</Link> </div>
      <div> <Link className={style.text} to= '/userquote'>UserQuotes</Link> </div>
      <div> <Link className={style.text} to= '/signUp'>SignUp</Link> </div>
      <div> <Link className={style.text} to= '/logIn'>LogIn</Link> </div>
    </div>
  )
}
