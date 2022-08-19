let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

const answer = Math.floor(Math.random()*10) + 1;
let numOfGuesses = 0;
let numbersUsed = [];

function numberGame(){
    var userGuess = document.getElementById("guess").value;
    if(userGuess < 1 || userGuess > 10){
        alert("Please enter a number between 1 and 10.");
    }
    else{
        numbersUsed.push(userGuess);
        numOfGuesses+= 1;

        if(userGuess < answer){
            msg1.textContent = "TOO LOW";
            msg2.textContent = "Number of Guesses " + numOfGuesses;
            msg3.textContent = "Guessed numbers " +
            numbersUsed;
        }
        else if(userGuess > answer){
            msg1.textContent = "TOO HIGH";
            msg2.textContent = "Number of Guesses:  " + numOfGuesses;
            msg3.textContent = "Numbers guessed " +
            numbersUsed;
        }
        else if(userGuess == answer){
            msg1.textContent = "Congrats!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in "+ numOfGuesses + " guesses";
            document.getElementById("btn").disabled = true;
        }
    }
}