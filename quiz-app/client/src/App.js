import React from 'react';
import Confetti from 'react-confetti';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {useEffect} from 'react' 

import Popup from './components/popup.js';
import Timer from  './components/Timer.js';

//put inside function to generate/display questionNumlater
//make questionNum a state so it renders for the next page


function App() {
  const [questionNum, setQuestion] = useState(Math.floor(Math.random() * 10));
  const [results, setResults] = useState("");
  const [counter, setCounter] = useState(0);
  const[error, setError]= useState("");
// DEFINE here
async function getData() {
  await fetch("http://localhost:5050/miatrivia")
  
  //return the response
    .then((response) => response)
    // with the data that was return store it questionNuma variable
    .then((data) => {
      return data.json();
    })
    .then((data)=> {
      
      // dont use questionNum until calling it in p tag
      setQuestion(Math.floor(Math.random() * 10))
    setResults(data.results[questionNum])
    let display = data.results[questionNum];
    console.log("questionNum ", display)

})
   }

//if value of button === questionNu.correct_answer
// how does the fron end know that /miatrivia is the endpoint that i wanted
//a: because you tell it - technically it should be `"http://localhost:PORT/miatrivia" - its the same thing as `https://www.linkedin.com/feed` or `https://facebook.com/device`
useEffect(() => {
 // CALL here
  getData() 
  
  
},[])


function correctAnswer(userAnswer){
  if( userAnswer==results.correct_answer){//
    setCounter(counter+1)
    getData();
    console.log(questionNum)

    //funfetti
  
  }else{
    setCounter(counter-1)
     getData();
    console.log(questionNum)
  //something awful here
  }
 }









    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

//set highscore to counter
//somehow keep from refreshing when page is reset
//function tokeep track of high score
//store counter into high score
//if current score>highscore{
  //sethighscore=current score
//disply"new high score!"}
//else display highscore




  return (
    <div className="App">
      <h1>Trivia Game </h1>
       <p>{results.question}</p>       
       <button onClick={()=>correctAnswer("True")}>True</button>
       <button onClick={()=>correctAnswer("False")}>False</button>
       <h2>Points: {counter}</h2>
        <Timer setIsOpen={setIsOpen}/>
      
    {isOpen && <Popup
      content={<>
        <b>Current Score {counter}</b>
        <p> High Score {counter} </p>
        <a href="/">
        <button{...setIsOpen(False)}>Play Again</button>
        </a>
      </>}
      handleClose={togglePopup}
    />}



    </div>

  );
}

export default App;
