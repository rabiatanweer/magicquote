import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../styles/Quote.module.css';
import user from '../styles/Userquote.module.css';

export default function Userquote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then(res => {
      setData(res.data[Math.floor(Math.random() * res.data.length)]);
    });
  }, []);

  function addQuote() {
    setMyQuote([...myQuote, inputValue]);
    setInputValue('');
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

  const [inputValue, setInputValue] = useState('');
  const [myQuote, setMyQuote] = useState([]);

  return (
    <div className={user.main}>
      <h1>Welcome To Random Quotes Generator APP</h1>
      <div className={user.section}>
        <div className={user.card}>
          <h2>"{data.text}"</h2>
          <h5>{data.author}</h5>
          <button>Click for next Quote</button>
        </div>
        <div className={user.card}>
          <h1>User quotes</h1>
          <div>
            <ul>
            {myQuote.map((quote, index) => (
                <li key={index}>{quote}</li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>
      <div className={user.input}>
        <div className={user.inputvalue}> 
        <input 
            type="text"
            placeholder="enter quote"
            value={inputValue}
            onChange={handleInput}
          />
        </div>
          
          <button onClick={addQuote}>Add Quote</button>
        </div>
    </div>
  );
}
