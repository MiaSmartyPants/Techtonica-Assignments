import react, {useRef,useEffect,useState} from 'react'


function GetHighScore ({counter, highScore, setHighScore}){
  
    if(counter > highScore){
        setHighScore(counter)
    //this is where you would connect to the database and updat the new highscore 
    }
console.log(counter, highScore)

    return(

        <div>
            
            <p> High Score {highScore} </p>
        </div>
    )
}

export default GetHighScore;