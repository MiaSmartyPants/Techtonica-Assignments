import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {
  const [question, setQuestion] = useState("");

// how does the fron end know that /miatrivia is the endpoint that i wanted
function getData() {
  fetch("/miatrivia")
  //return the response
    .then((response) => response)
    // with the data that was return store it n a variable
    .then((data) => {
      console.log(data, 'something');
      setQuestion(data);
    });
    console.log(question);
}
  return (
    <div className="App">
    <h1>Trivia Game</h1>
<p>{question}</p>

    </div>
  );
}

export default App;
