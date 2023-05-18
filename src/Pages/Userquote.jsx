import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../styles/Quote.module.css';
import user from '../styles/Userquote.module.css';

export default function Userquote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();
  const[search, setSearch]= useState();
  const [inputValue, setInputValue] = useState('');
  const [myQuote, setMyQuote] = useState([]);
  const useremail= localStorage.getItem("useremail")
  const [userData, setUserData]= useState([]);
 

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
        .then((res) => {
      
        localStorage.setItem('quoteData', JSON.stringify(res.data));})
       const userProtectedData = JSON.parse(localStorage.getItem(`${useremail}`))
       if (userProtectedData) {
        setMyQuote(userProtectedData);
        setUserData(userProtectedData);
      } else {
        setMyQuote([]);
        setUserData([]);
      }
    
  }, []);
  useEffect(()=>{
    let quoteData= JSON.parse(localStorage.getItem('quoteData'))
    const randomIndex = Math.floor(Math.random() * quoteData.length);
      const randomQuote = quoteData[randomIndex];
      setData(randomQuote);
  },
  [quote])

  const handleNextQuote = () => {
    setQuote(!quote)
  };

  function addQuote() {
    
    if(inputValue===""){
       console.log("cnt be empty")
    }
    else{
      setMyQuote([...myQuote, inputValue]);
      setUserData([...myQuote, inputValue]);
      setInputValue('');
    
      let savedquotes = JSON.parse(localStorage.getItem(`${useremail}`)) || [];
      savedquotes.push(inputValue);
      localStorage.setItem(`${useremail}`, JSON.stringify(savedquotes));
      setMyQuote(savedquotes);
    }
  }

  function handleInput(event) {
    setInputValue(event.target.value);
  }

 
  function searchInput(event) {
    setSearch(event.target.value);
    const searchValue = event.target.value;
    setSearch(searchValue);
   
    if (searchValue === "") {
      setUserData(myQuote);
    } else {
      const filteredData = myQuote.filter((item) => {
        return item.toLowerCase().includes(searchValue.toLowerCase());
      });
      setUserData(filteredData);
    }
  }

  return (
    <div className={user.main}>
      <h1>Welcome To Random Quotes Generator APP</h1>
      <div className={user.section}>
        <div className={user.card}>
          <h2>"{data.text}"</h2>
          <h5>{data.author}</h5>
          <button className={style.button} onClick={handleNextQuote}>
          Click for next Quote
        </button>
        </div>
        <div className={user.card}>
          <h1>User quotes</h1>
          <input type="text" placeholder="Search Quote"  value={search} onChange={searchInput} required />

          <div>
            <ul>
            {userData.map((quote, index) => (
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
