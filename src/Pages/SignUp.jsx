import React from 'react'
import style from  '../styles/Signup.module.css'

export default function SignUp() {
  return (
    <div className={style.main}>
     <form action="action_page.php" >
  <div className={style.container}>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required />
    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
   
    
    <div className= {style.clearfix}>
      
      <button type="submit" className={style.signupbtn}>Sign Up</button>
    </div>
  </div>
</form>

    </div>
  )
}
