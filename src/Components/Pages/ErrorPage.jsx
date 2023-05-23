import React from 'react'
import '../../styles/error.css'

const ErrorPage = () => {
  return (
    <div className='heading'>
     <h1> Page Not Found</h1> 
     <h5>We could not find what you were looking for:</h5>
     <p>Please contact the owner of the site  that linked you to the orignal URL and let them <br/> know their link is broken </p>
    </div>
  )
}
export default ErrorPage
