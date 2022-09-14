import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {useEffect} from 'react' 


function App() {
  const [question, setQuestion] = useState("");
  const[error, setError]= useState("");
// DEFINE here
async function getData() {
  await fetch("http://localhost:5050/miatrivia")
  
  //return the response
    .then((response) => response)
    // with the data that was return store it n a variable
    
    .then((data) => {
     
     
      return data.json();
      // setQuestion(data);
    })

    .then((data)=>console.log(data));

    
   }

    // .catch (error => {
    //   console.error("Error fetching data: ", error);
    //   setError(error);
    // })
    //console.log(question);
//}

// how does the fron end know that /miatrivia is the endpoint that i wanted
//a: because you tell it - technically it should be `"http://localhost:PORT/miatrivia" - its the same thing as `https://www.linkedin.com/feed` or `https://facebook.com/device`
useEffect(() => {
 // CALL here
  getData()
},[])
//getData();
  return (
    <div className="App">
    <h1>Trivia Game</h1>
    </div>
  );
}

export default App;
