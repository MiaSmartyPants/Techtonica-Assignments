import react, {useRef,useEffect,useState} from 'react'


function Confetti ({showPic,setPic}){
    const lose= "https://media1.giphy.com/media/YPsmTqYiHCMYtlsfKZ/200w.webp?cid=ecf05e474st0o27jlchhk9mbm5pta7c0m4bly3va1n8zli1i&rid=200w.webp&ct=g"
    const win = "https://media2.giphy.com/media/y8Mz1yj13s3kI/200.webp?cid=ecf05e47b5tvwlsispgr4oqssw52ud5jtvh5q4mehkzngwv8&rid=200.webp&ct=g"
    
    
    setPic(win)
    
console.log(counter, highScore)

        
       
    return(

        <div>
            
           <img src={showPic} />
        </div>
    )

}

export default Confetti;