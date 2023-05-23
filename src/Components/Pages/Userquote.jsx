import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  '../../styles/Userquote.css';
import '../../styles/Quote.css'
import {AiOutlineCloseSquare} from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Userquote() {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState();
  const[search, setSearch]= useState();
  const [inputValue, setInputValue] = useState('');
  const [myQuote, setMyQuote] = useState([]);
  const useremail= localStorage.getItem("useremail");
  const userName= localStorage.getItem(`name-${useremail}`)
  const [userData, setUserData]= useState([]);
 
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

  useEffect(() => {
    const storedUserQoute = JSON.parse(localStorage.getItem(`${useremail}`)
    )
    if (storedUserQoute) {
      setMyQuote(storedUserQoute)
      setUserData(storedUserQoute)
    } else {
      setMyQuote([])
      setUserData([])
    }
  }, [useremail])

  const handleNextQuote = () => {
    setQuote(!quote)
  };

  function addQuote() {
    
    if(inputValue===""){
      toast.info("Can't be empty ")
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
  function deleteQoute(index){
   const removeQuote =[...myQuote]
    removeQuote.splice(index, 1)
    console.log(removeQuote)
    setMyQuote(removeQuote)
    setUserData(removeQuote)
    localStorage.setItem( `${useremail}`, JSON.stringify(removeQuote) )
  }

  return (
    <div className="main_user">
      <h1>Welcome "{userName}" to RandomQuoteGen: Inspire with Every Click</h1>
      <div className="section">
        <div className="card">
        <h1>Ramdon quotes</h1>
          <h2>"{data.text}"</h2>
          <h5>~{data.author}</h5>
          <button onClick={handleNextQuote}>
           Next Quote
        </button>
        </div>
        <div className="card">
          <h1>User quotes</h1>
          <input type="text" placeholder="Search Quote"  value={search} onChange={searchInput} required />

          <div className="quotes">
            <ul>
            {userData.map((quote , index) => (
                <li key={index}> <span className="span" onClick={()=>{deleteQoute(index)}}>< AiOutlineCloseSquare size={20} /> </span> {quote } </li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>
      <div className="input_user">
        <div className="inputvalue"> 
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
