import react, {useRef,useEffect,useState} from 'react'


function GetHighScore ({counter, highScore, setHighScore}){
  
    if(counter > highScore){
    setHighScore(counter) 
   
            // setHighScore(JSON.parse(window.localStorage.getItem('highScore')));
       
          
       
            // window.localStorage.setItem('highScore', highScore);
      
    //this is where you would send to the database and updat the new highscore 
    }
console.log(counter, highScore)

        
       
    return(

        <div>
            
            <p> High Score {highScore} </p>
        </div>
    )

}

export default GetHighScore;