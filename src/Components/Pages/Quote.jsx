
import React, { useEffect, useState } from 'react';
import '../../styles/Quote.css'
import axios from 'axios';

export default function Quote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();

  useEffect(() => {
    let quoteData= JSON.parse(localStorage.getItem('quoteData'))
    if (quoteData){
      const randomIndex = Math.floor(Math.random() * quoteData.length);
      const randomQuote = quoteData[randomIndex];
      setData(randomQuote);
      
    }
    else{
       fetchData()  
    
    }
  }, [quote]);

  const fetchData = ()=>{
    axios.get('https://type.fit/api/quotes') 
    .then((res) => {
    localStorage.setItem('quoteData', JSON.stringify(res.data));
    const randomIndex = Math.floor(Math.random() * res.data.length);
    const randomQuote = res.data[randomIndex];
    setData(randomQuote);
  }) 
  }
  const handleNextQuote = () => {
    setQuote(!quote)
  };
  return (
    <div className="main_quote">
      <h1> Welcome To Random Quotes Generator APP</h1>
      <div className="card_quote">
        <h2>" {data.text}"</h2>
        <h5> {data.author}</h5>
        <button className="button_quote" onClick={handleNextQuote}>
          Next Quote
        </button>
      </div>
    </div>
  );
}

