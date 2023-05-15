import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Quote from '../Pages/Quote'
import Userquote from '../Pages/Userquote'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import Footer from '../Components/Footer'

export default function Routing() {
  return (
    <div>
        <Router>
            <Navbar/>
                <Routes>
                    <Route path='/'element= {<Quote/>} />
                    <Route path='/userquote'element= {<Userquote/>} />
                    <Route path='/signup'element= {<SignUp/>} />
                    <Route path='/login'element= {<LogIn/>} />
                </Routes>
            <Footer/>
        </Router>
      
    </div>
  )
}
