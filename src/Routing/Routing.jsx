
import React from 'react'
import {  Routes, Route  } from 'react-router-dom'
import Quote from '../Components/Pages/Quote'
import Userquote from '../Components/Pages/Userquote'
import SignUp from '../Components/Pages/SignUp'
import LogIn from '../Components/Pages/LogIn'
import UserQuoteProtect from '../Components/Pages/UserQuoteProtect'
import ErrorPage from '../Components/Pages/ErrorPage'


export default function Routing() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Quote />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/userquote' element={<UserQuoteProtect  Comp={Userquote} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
    </div>
  )
}

