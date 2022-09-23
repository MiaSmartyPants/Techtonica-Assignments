import react, {useRef,useEffect,useState} from 'react'


function  Timer({setIsOpen, timer, setTimer}){

     
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer-1);
            if(timer== 0){
                setIsOpen(true)
                clearInterval(interval);
                
             }

        }, 1000);
       
        return () => clearInterval(interval);
      }, [timer]);
 

return (

    <div className="timer">
            <h2>00{timer}</h2>
       {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
)
}

export default Timer;