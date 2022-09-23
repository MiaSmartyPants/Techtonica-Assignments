import React from 'react';
import Confetti from 'react-confetti';
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {useEffect} from 'react' 
import GetHighScore from "./components/GetHighScore";
import Popup from './components/popup.js';
import Timer from  './components/Timer.js';
//import Confetti from'./components/Confetti.js';

//put userAnswer inside a state variable so when i use it as conditional rendering the variable is available acrooss the app component
// add song



function App() {
  const [questionNum, setQuestion] = useState(Math.floor(Math.random() * 10));
  const [results, setResults] = useState("");
  const [counter, setCounter] = useState(0);
  const[error, setError]= useState("");
  const[highScore, setHighScore] = useState(counter);
  const[showPic, setPic] = useState("")

const [timer, setTimer] = useState(10);

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
// need to set state before the next question is called , since im rendering the picture after the next question has been called, the rendering conditin is comparing with the next question instead of the current question
const[userAnswer, setUserAnswer]=useState("");

function correctAnswer(userButton){


  if( userButton==results.correct_answer){//
    setCounter(counter+1)
  setUserAnswer(userButton)
    getData();
    
    console.log(questionNum);
  
  
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
//instead of calling the home page
// reset counter
//reset time
// so to keep the higscore from rreinitializing to counter whenever the function is called move the state initialize outside of the function so when the function is called it will check for the new high score and then update








  return (
    <div className="App">
      <br></br><br></br>
      <h1 className="title">Trivia Game </h1>
      <img src="https://media0.giphy.com/media/HflmE0fm2z73wCzAXV/200w.webp?cid=ecf05e473oj4866ebgy355qwcyy4kh16iqicdmdjy1hwfap8&rid=200w.webp&ct=s"  />
      
       <p className="question">
       <br></br><br></br>
         {results.question}</p>  


       <button className="button" onClick={()=>correctAnswer("True")}>True</button>
       <button className="button"  onClick={()=>correctAnswer("False")}>False</button>
       
       <h2 >Points: {counter}</h2>
        <Timer setIsOpen={setIsOpen} timer={timer} setTimer={setTimer} />
        {/* <Confetti key={counter} showPic={showPic} setPic={setPic} /> */}

<div >
      { userAnswer==results.correct_answer && 
       <img src="https://media1.giphy.com/media/y8Mz1yj13s3kI/giphy.gif?cid=ecf05e47qs1e8kvhypwn7vv9fhigfeotentv5le5ih7r89au&rid=giphy.gif&ct=g" />
      }
      {/* { userAnswer!==results.correct_answer && 
        <img src="https://media0.giphy.com/media/YPsmTqYiHCMYtlsfKZ/200w.webp?cid=ecf05e47i746bpqaulj5ue0r60r5b6zfz3nhqpnx1lxt7a1b&rid=200w.webp&ct=g" />
      } */}
</div>



    {isOpen && <Popup
      content={<>
        <b >Current Score {counter}</b>
       
        <GetHighScore counter={counter} setHighScore={setHighScore} highScore={highScore} />
               
        
        <img src="https://media3.giphy.com/media/7SjUNgv2sy9ZQqcgUV/200w.webp?cid=ecf05e474jwvm5ak72wz8q2mfiwzr0juasubiwpm2g4h39vy&rid=200w.webp&ct=s"  />
        <button onClick={()=>{
         
         setCounter(0);
        //  handleClick();
          //  <timer />
        setTimer(10)
          //controll the set timer statevariable from the parent component
          //parent create a function
          //pass that function to the child component
          // child component call that function with the setvariable as the parameter
          // setTimer('00:00:10') 
          setIsOpen(false)
          }}>Play Again</button>
     
      </>}
      handleClose={togglePopup}
    />}



    </div>

  );
}

export default App;
