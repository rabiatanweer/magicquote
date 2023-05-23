import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserQuoteProtected = (props) => {
  const {Comp} = props;
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("login")) 
    if (!isLoggedIn) {
      navigate('/login');
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {<Comp />}
    </div>
  );
}

export default UserQuoteProtected;

