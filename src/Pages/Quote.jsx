// import React, { useEffect, useState } from 'react'
// import style from '../styles/Quote.module.css'
// import axios from 'axios'



// export default function Quote() {
//     const [data, setData] = useState({ });
//     const [quote, setQuote]= useState()
  
//     useEffect(()=>{
//       axios.get("https://type.fit/api/quotes").then(
//         res=>setData(res.data[Math.floor(Math.random()*res.data.length)]))
//       }, []
//     )
    
//   return (
//     <div className={style.main}>
//     <h1>  Welcome To Random Quotes Generator APP</h1>
     
//       <div className={style.card}>
//         <h2>
//            " {data.text}"
//         </h2>
//         <h5> {data.author}</h5>
//         <button className= {style.button}> Click for next Quote</button>
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import style from '../styles/Quote.module.css';
import axios from 'axios';

export default function Quote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();

  useEffect(() => {
    // Check if data exists in local storage
    const storedData = localStorage.getItem('quoteData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  const fetchData = () => {
    axios.get('https://type.fit/api/quotes').then((res) => {
      const randomIndex = Math.floor(Math.random() * res.data.length);
      const randomQuote = res.data[randomIndex];
      setData(randomQuote);
      localStorage.setItem('quoteData', JSON.stringify(randomQuote));
    });
  };

  const handleNextQuote = () => {
    fetchData();
  };

  return (
    <div className={style.main}>
      <h1> Welcome To Random Quotes Generator APP</h1>

      <div className={style.card}>
        <h2>" {data.text}"</h2>
        <h5> {data.author}</h5>
        <button className={style.button} onClick={handleNextQuote}>
          Click for next Quote
        </button>
      </div>
    </div>
  );
}

