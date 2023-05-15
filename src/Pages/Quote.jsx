import React, { useEffect, useState } from 'react'
import style from '../styles/Quote.module.css'
import axios from 'axios'



export default function Quote() {
    const [data, setData] = useState({ });
    const [quote, setQuote]= useState()
  
    useEffect(()=>{
      axios.get("https://type.fit/api/quotes").then(
        res=>setData(res.data[Math.floor(Math.random()*res.data.length)]))
      }, []
    )
    
  return (
    <div className={style.main}>
    <h1>  Welcome To Random Quotes Generator APP</h1>
     
      <div className={style.card}>
        <h2>
           " {data.text}"
        </h2>
        <h5> {data.author}</h5>
        <button className= {style.button}> Click for next Quote</button>
      </div>
    </div>
  )
}


// import React, { useEffect } from 'react';
// import axios from 'axios';

// const Quote = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://type.fit/api/quotes');
//         const data = response.data;

//         // Store data in local storage
//         localStorage.setItem('quoteData', JSON.stringify(data));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const getDataFromLocalStorage = () => {
//     // Retrieve data from local storage
//     const storedData = localStorage.getItem('quoteData');

//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       // Use the data as needed
//       console.log(parsedData);
//     }
//   };

//   return (
//     <div>
//       <button onClick={getDataFromLocalStorage}>Get Data from Local Storage</button>
//       <h2>{getDataFromLocalStorage.text} </h2>
//     </div>
//   );
// };

// export default Quote;

